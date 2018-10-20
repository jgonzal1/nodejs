const austria = require('./data/austria')
const states = austria();
const fs = require('fs');
let L = require('leaflet');

//#region Create Base Layers
var map = L.map('map', {
    //scrollWheelZoom: false
});

// Set the position and zoom level of the map
// map.setView([40.4942011, -3.7101309], 13);
map.setView([47.70, 14.74], 8);

// Initialize the base layers
var artistic_map = L.tileLayer(
    'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
    {
        maxZoom: 19,
        attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
).addTo(map);
var osm_mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
)

// Create base layers group object
var baseLayers = {
	"OSM Mapnik": osm_mapnik,
	"Artistic Map": artistic_map
};//*/
//#endregion

//#region Create Markers
var pinkIcon = L.icon({
    iconUrl: 'style/marker-pink.png',
    iconSize: [39, 39],
    iconAnchor: [18, 39],
    popupAnchor: [10, -35]
});
var greenIcon = L.icon({
    iconUrl: 'style/marker-green.png',
    iconSize: [39, 39],
    iconAnchor: [18, 39],
    popupAnchor: [10, -35]
});
var blueIcon = L.icon({
    iconUrl: 'style/marker-blue.png',
    iconSize: [39, 39],
    iconAnchor: [18, 39],
    popupAnchor: [10, -35]
});
var klagenfurt = L.marker([46.623997, 14.307812], {icon: pinkIcon}).bindPopup('<b>Klagenfurt, Kärnten</b>'),
graz = L.marker([47.070762, 15.438698], {icon: pinkIcon}).bindPopup('<b>Graz, Steiermark</b>'),
salzburg = L.marker([47.805109, 13.041151], {icon: pinkIcon}).bindPopup('<b>Salzburg, Salzburg</b>'),
eisenstadt = L.marker([47.845993, 16.527337], {icon: greenIcon}).bindPopup('<b>Eisenstadt, Burgenland</b>'),
wien = L.marker([48.208539, 16.372505], {icon: greenIcon}).bindPopup('<b>Wien, Wien</b>'),
stpoelten = L.marker([48.203828, 15.630877], {icon: greenIcon}).bindPopup('<b>St.Pölten, Niederösterreich</b>'),
linz = L.marker([48.307025, 14.284829], {icon: blueIcon}).bindPopup('<b>Linz, Oberösterreich</b>')//,
//innsbruck = L.marker([47.268896, 11.401791], {icon: blueIcon}).bindPopup('<b>Innsbruck, Tirol</b>'),
//bregenz = L.marker([47.500929, 9.740660], {icon: blueIcon}).bindPopup('<b>Bregenz, Vorarlberg</b>')
;
var capitals = L.layerGroup(
    [
        klagenfurt, graz, eisenstadt,
        salzburg, wien, stpoelten,
        linz//, innsbruck, bregenz
    ]
).addTo(map);//*/
//#endregion

//#region Add Interactive GeoJson to the map
var geojson = L.geoJSON(
	states,
	{
		style: style,
		onEachFeature: onEachFeature
	}
).addTo(map)
//geojson.addData(jsonfeaturestates2);

var overlays = {
    'Austrian States': geojson,
    'Capitals': capitals
};

// Add baseLayers to the map
L.control.layers(baseLayers, overlays).addTo(map); //null

// Create control that shows information on hover
var info = L.control({position:'topright'});

info.onAdd = function (map) {
	this._div = L.DomUtil.create('div', 'info');
	this.update();
	return this._div;
};

info.update = function (props) {
		this._div.innerHTML = '<p><b>Population Density</b></p>' +  (props ?
			'<b>' + props.name + '</b><br />' + props.density + ' people / km<sup>2</sup>'
			: 'Hover over a state');
};
info.addTo(map);

function getColor(d) {
	return d > 1000 ? '#0868ac' :
			d > 130  ? '#2f8ec0' :
			d > 100  ? '#55b0c8' :
			d > 80   ? '#7bccc4' :
			d > 70   ? '#a5dcbe' :
			d > 50   ? '#ccebca' :
						'#ccebca';
}

// Set of function for the hover over the geojson layer
function style(feature) {
	return {
		weight: 2,
		opacity: 0.7,
		color: 'white',
		dashArray: '2',
		fillOpacity: 0.7,
		fillColor: getColor(feature.properties.density)

	};
}

function highlightFeature(e) {
	var layer = e.target;

	layer.setStyle({
		weight: 5,
		color: '#277FCA',
		dashArray: '',
		fillOpacity: 0.7
	});

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
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

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

	var div = L.DomUtil.create('div', 'info legend'),
		grades = [1, 70, 80, 100, 130, 1000],
		labels = ["personas/km²"], // additional ranges "A","B","C","D","E","F"
		from, to;

	for (var i = 0; i < grades.length; i++) {
		from = grades[i];
		to = grades[i + 1];

		labels.push(
			'<i style="background:' + getColor(from + 1) + '"><font color=' + getColor(from + 1) + '>__</font></i> ' +
			from + (to ? '&ndash;' + to : '+'));
	}

	div.innerHTML = labels.join('<br>');
	return div;
};

legend.addTo(map);//*/
//#endregion
