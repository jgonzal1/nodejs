const createIcon = require('./style/createIcon');
const geoJsonStylers = require('./style/geoJsonStylers');
const getPwds = require('./dev.private.js');
const pwd = getPwds();
const austria = require('./data/austria');
const states = austria();
const getSites = require('./data/sites');
const sites = getSites();
let L = require('leaflet');

//#region Create Base Layers
let map = L.map('map', { /*scrollWheelZoom: false*/ } );
let coords, lat, long, zoom;
   coords = [40.4942011, -3.7101309, 15] // MADRID
// coords = [ 6.509594	, 3.370337 , 15] // PLAYER @ Laos, Nigeria
// coords = [47.70     , 14.74     , 8 ] // AUSTRIA
// coords = [48.303360 , 14.301875 , 17] // PLAYER @ Linz, Oberösterreich
lat  = coords[0]; // y
long = coords[1]; // x
zoom = coords[2]; // z
// L.circle([lat, long], {radius: 200, color: "black"}).addTo(map);
map.setView([lat, long], zoom);
let artisticMap = L.tileLayer(
    'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
    { minZoom: 2, maxZoom: 17 }
).addTo(map);
/*let tonerMap = L.tileLayer.Grayscale(
    'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
    { maxZoom: 17 }
)*/

let hellMap = L.tileLayer(
	'https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey='+pwd['thunderforestKey']
)

let osmMap = L.tileLayer(
	'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { minZoom: 2, maxZoom: 19 }
)

let satelliteMap = L.tileLayer(
	'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
	{
	attribution:
		'Tiles &copy; Esri &mdash; Source:' +
		'Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
	}
);

let baseLayers = {
	"Mapa juego": artisticMap,
	"Mapa nocturno": hellMap,	
	"Mapa descriptivo": osmMap,
	"Mapa satélite": satelliteMap,
};
//#endregion

//#region Markers
let pinkIcon   = L.icon(createIcon('style/marker-pink.png'));
let greenIcon  = L.icon(createIcon('style/marker-green.png'));
let blueIcon   = L.icon(createIcon('style/marker-blue.png'));
let playerIcon = L.icon(createIcon('style/ratkid-shaded.png'));
let player 		= L.marker([lat, long], {icon: playerIcon}).bindPopup(
	'<b>Tú (Ratkids rookie, lvl. 1)</b>'
);
let target 		= L.marker([lat+(Math.random()-0.5)/10000, long+(Math.random()-0.5)/1000], {icon: blueIcon}).bindPopup(
	'<b>Tú (Ratkids rookie, lvl. 1)</b>'
);
/*let markers = [];
markers.push(player);
for(let i in sites) {
    markers.push(L.marker([sites[i][1], sites[i][2]], {icon: pinkIcon}).bindPopup('<b>'+sites[i][0]+'</b>'))
}*/
let	klagenfurt 	= L.marker([46.623997, 14.307812], {icon: pinkIcon	}).bindPopup('<b>Klagenfurt, Kärnten</b>'),
	graz 		= L.marker([47.070762, 15.438698], {icon: pinkIcon	}).bindPopup('<b>Graz, Steiermark</b>'),
	salzburg 	= L.marker([47.805109, 13.041151], {icon: pinkIcon	}).bindPopup('<b>Salzburg, Salzburg</b>'),
	eisenstadt 	= L.marker([47.845993, 16.527337], {icon: greenIcon	}).bindPopup('<b>Eisenstadt, Burgenland</b>'),
	wien 		= L.marker([48.208539, 16.372505], {icon: greenIcon	}).bindPopup('<b>Wien, Wien</b>'),
	stpoelten 	= L.marker([48.203828, 15.630877], {icon: greenIcon	}).bindPopup('<b>St. Pölten, Niederösterreich</b>'),
	linz 		= L.marker([48.307025, 14.284829], {icon: blueIcon	}).bindPopup('<b>Linz, Oberösterreich</b>')//,
 // innsbruck	= L.marker([47.268896, 11.401791], {icon: blueIcon	}).bindPopup('<b>Innsbruck, Tirol</b>'),
 // bregenz		= L.marker([47.500929,  9.740660], {icon: blueIcon	}).bindPopup('<b>Bregenz, Vorarlberg</b>')
;
let layers = L
	.layerGroup([
		//markers
		player, target, klagenfurt, graz, eisenstadt, salzburg, wien, stpoelten, linz
	]) // ^ , innsbruck, bregenz
	.addTo(map);

//let counter = 1;
function keyListener(milliseconds) {
	let moveDaemonizer = setInterval(function() {
		const spawnNewPoint = Math.random();
		if (spawnNewPoint > 0.9) {
			const latDiff = player.getLatLng().lat - target.getLatLng().lat;
			const lngDiff = player.getLatLng().lng - target.getLatLng().lng;
			let forcedDirection;
			if (Math.abs(latDiff) > Math.abs(lngDiff)) {
				if (latDiff>0) {forcedDirection='d'} else {forcedDirection='a'}
			} else {
				if (lngDiff>0) {forcedDirection='w'} else {forcedDirection='s'}
			}
			moveCharacter(target, forcedDirection);
		}
		moveCharacter(player);
		//counter++;
	}, milliseconds);
	// clearInterval(moveDaemonizer);
}
keyListener(33); //30+ fps
//#endregion

//#region Move handlers
function fleeFromPlayer(target) {
	const latDiff = player.getLatLng().lat - target.getLatLng().lat;
	const lngDiff = player.getLatLng().lng - target.getLatLng().lng;
	let forcedDirection;
	if (Math.abs(latDiff) > Math.abs(lngDiff)) {
		if (latDiff>0) {forcedDirection='a'} else {forcedDirection='d'}
	} else {
		if (lngDiff>0) {forcedDirection='s'} else {forcedDirection='w'}
	}
	moveCharacter(target, forcedDirection);
}

function goToPlayer(target) {
	const latDiff = player.getLatLng().lat - target.getLatLng().lat;
	const lngDiff = player.getLatLng().lng - target.getLatLng().lng;
	let forcedDirection;
	if (Math.abs(latDiff) > Math.abs(lngDiff)) {
		if (latDiff>0) {forcedDirection='d'} else {forcedDirection='a'}
	} else {
		if (lngDiff>0) {forcedDirection='w'} else {forcedDirection='s'}
	}
	moveCharacter(target, forcedDirection);
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function moveCharacter(character, forceDirection, movemap) { // 80km/h | 12x
	character = ( character || player );
	movemap = (movemap || ['w', 'a', 's', 'd'] );
	const direction = (forceDirection || L.DomUtil.get(hiddenlogs).innerHTML)
	switch (direction) { //forceDirection
	case movemap[0]:
		character.setLatLng(L.latLng(character.getLatLng().lat+0.00001,character.getLatLng().lng));
		break;
	case movemap[1]:
		character.setLatLng(L.latLng(character.getLatLng().lat,character.getLatLng().lng-0.00001));
		break;
	case movemap[2]:
		character.setLatLng(L.latLng(character.getLatLng().lat-0.00001,character.getLatLng().lng));
		break;
	case movemap[3]:
		character.setLatLng(L.latLng(character.getLatLng().lat,character.getLatLng().lng+0.00001));
		break;
	}
}
//#endregion

//#region geoJson Overlayers
let geojson = L.geoJSON(
	states,
	{ style: geoJsonStylers.style, onEachFeature: onEachFeature }
)//.addTo(map); //not showing it at start
// geojson.addData(jsonfeaturestates2);
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
		'Hover over a state') // + '<p>' + L.DomUtil.get(hiddenlogs).innerHTML + '</p>'
	;
};
let infoUpdaterCounter = 1;
function backgroundInfoUpdater(milliseconds) {
	setInterval(function() {
		let boolChecker;
		if (L.DomUtil.get(hiddenlogs).innerHTML === 'w') { //innerHTML
			boolChecker = true
		} else {
			boolChecker = false
		}
		info.update = function() {
			this._div.innerHTML +=
				'<div class="backendlogs">' +
				'<p><b>Key' + L.DomUtil.get(hiddenlogs).innerHTML + '</b></p>'
				'<b>' + boolChecker + '<br/>' /* +
				player.getLatLng().lat*/ + '</b>' /* +
				infoUpdaterCounter.toString()*/
				'</div>'
			;
		};

		infoUpdaterCounter++;

	}, milliseconds);
}
//backgroundInfoUpdater(3000);
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
			'<i style="background:' + geoJsonStylers.getColor(from + 1) + '">' +
				'<font color=' + geoJsonStylers.getColor(from + 1) + '>__</font>' +
			'</i> ' + from + (to ? '&ndash;' + to : '+'));
	}

	div.innerHTML = labels.join('<br>');
	return div;
};
legend.addTo(map);//*/
//#endregion
