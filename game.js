const createIcon = require('./style/createIcon');
const geoJsonStylers = require('./style/geoJsonStylers');
const austria = require('./data/austria');
const states = austria();
let L = require('leaflet');

//#region Create Base Layers
let map = L.map('map', { /*scrollWheelZoom: false*/ } );
let coords, lat, long, zoom;
// coords = [40.4942011, -3.7101309, 13] // MADRID
// coords = [47.70     , 14.74     , 8 ] // AUSTRIA
   coords = [48.303360 , 14.301875 , 17] // PLAYER @ Linz, Oberösterreich
lat  = coords[0]; // y
long = coords[1]; // x
zoom = coords[2]; // z
map.setView([lat, long], zoom);
let artisticMap = L.tileLayer(
    'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
    { maxZoom: 17 }
).addTo(map);
let osmMapnik = L.tileLayer(
	'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { maxZoom: 19 }
)
let baseLayers = {
	"Mapa Acuarela": artisticMap,	
	"Mapa completo OSM": osmMapnik,
};
//#endregion

//#region Create Markers
let pinkIcon   = L.icon(createIcon('style/marker-pink.png'));
let greenIcon  = L.icon(createIcon('style/marker-green.png'));
let blueIcon   = L.icon(createIcon('style/marker-blue.png'));
let playerIcon = L.icon(createIcon('style/ratkid-shaded.png'));
let player 		= L.marker([48.303360, 14.301875], {icon: playerIcon}).bindPopup('<b>Tú (Ratkids rookie, lvl. 1)</b>'),
	klagenfurt 	= L.marker([46.623997, 14.307812], {icon: pinkIcon	}).bindPopup('<b>Klagenfurt, Kärnten</b>'),
	graz 		= L.marker([47.070762, 15.438698], {icon: pinkIcon	}).bindPopup('<b>Graz, Steiermark</b>'),
	salzburg 	= L.marker([47.805109, 13.041151], {icon: pinkIcon	}).bindPopup('<b>Salzburg, Salzburg</b>'),
	eisenstadt 	= L.marker([47.845993, 16.527337], {icon: greenIcon	}).bindPopup('<b>Eisenstadt, Burgenland</b>'),
	wien 		= L.marker([48.208539, 16.372505], {icon: greenIcon	}).bindPopup('<b>Wien, Wien</b>'),
	stpoelten 	= L.marker([48.203828, 15.630877], {icon: greenIcon	}).bindPopup('<b>St.Pölten, Niederösterreich</b>'),
	linz 		= L.marker([48.307025, 14.284829], {icon: blueIcon	}).bindPopup('<b>Linz, Oberösterreich</b>')//,
 // innsbruck	= L.marker([47.268896, 11.401791], {icon: blueIcon	}).bindPopup('<b>Innsbruck, Tirol</b>'),
 // bregenz		= L.marker([47.500929,  9.740660], {icon: blueIcon	}).bindPopup('<b>Bregenz, Vorarlberg</b>')
;
let layers = L
	.layerGroup([
		player, klagenfurt, graz, eisenstadt, salzburg, wien, stpoelten, linz
	]) // ^ , innsbruck, bregenz
	.addTo(map);
//#endregion

//#region geoJson Overlayers
let geojson = L.geoJSON(
	states,
	{ style: geoJsonStylers.style, onEachFeature: onEachFeature }
).addTo(map); // geojson.addData(jsonfeaturestates2);
let overlays = {
    'Regiones': geojson,
    'Puntos de interés': layers
};
L.control.layers(baseLayers, overlays).addTo(map);
//#endregion

//#region geoJson Hovering Information show
let info = L.control({position:'topright'});
info.onAdd = function(map) {
	this._div = L.DomUtil.create('div', 'info');
	this.update();
	return this._div;
};
info.update = function(props) {
	this._div.innerHTML = '<p><b>Population Density</b></p>' + (props ?
		'<b>' + props.name + '</b><br/>' + props.density + ' people / km<sup>2</sup>' :
		'Hover over a state'
	);
};
info.addTo(map);
//#endregion

//#region geoJson Hovering Visual effects
function highlightFeature(e) {
	let layer = e.target;

	layer.setStyle({
		weight: 5,
		color: '#277FCA',
		dashArray: '',
		fillOpacity: 0.7
	});

	if(!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	}

	info.update(layer.feature.properties);
}
function resetHighlight(e) {
	geojson.resetStyle(e.target);
	info.update();
}
function zoomToFeature(e) {
	map.fitBounds(e.target.getBounds());
}
function onEachFeature(feature, layer) {
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetHighlight,
		click: zoomToFeature
	});
}
//#endregion

//#region Legend
let legend = L.control({position: 'bottomright'});
legend.onAdd = function(map) {

	let div = L.DomUtil.create('div', 'info legend'),
		grades = [1, 70, 80, 100, 130, 1000],
		labels = ["personas/km²"],
		from, to;

	for(let i = 0; i < grades.length; i++) {
		from = grades[i];
		to = grades[i + 1];

		labels.push(
			'<i style="background:' + geoJsonStylers.getColor(from + 1) + '"><font color=' + geoJsonStylers.getColor(from + 1) + '>__</font></i> ' +
			from + (to ? '&ndash;' + to : '+'));
	}

	div.innerHTML = labels.join('<br>');
	return div;
};
legend.addTo(map);//*/
//#endregion
