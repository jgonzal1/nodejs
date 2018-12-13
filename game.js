//#region Imports
const enemyMover = require('./assets/enemyMover');
const keyHandler = require("./assets/keyHandler");
// TODO >>>>> Working main game key bindings & hints
// TODO Duplicated mH.fcalcDist array on the inside because of async
// TODO Make attack handler different for all player attack position disruption cases
const mH = require('./assets/moveHandlers');
// TODO Not always take out enemy (after battles, it may stay)
const pushCharacters = require('./assets/pushCharacters');
const spawnEnemies = require('./assets/spawnEnemies'); // TODO Enemies properties + battler hearths
const spawnObjectives = require('./assets/spawnObjectives');
const spawnPlaces = require('./assets/spawnPlaces');
const spawnTransports = require('./assets/spawnTransports');
const getKeymap = require('./data/keymap');
global.keymap = getKeymap();
const spawnRegionsAustria = require('./data/regionsAustria');
const regionsAustria = spawnRegionsAustria();
const spawnSites = require('./data/sites');
const sites = spawnSites.getSites();
const places = spawnSites.getPlaces();
const nPlaces = places.length;
const initialCoords = spawnSites.getInitialCoords()["España.Madrid.Mirasiera"];
// TODO > Start in player's location (locatePlayer in assets)
// document.getElementById('hiddenHandlerPos').innerText.split(",")[0]/[1] + redis
const createBaseLayerAndAddMore = require('./providers/createBaseLayerAndAddMore');
const createLargeIcon = require('./style/createLargeIcon');
const createBattlerIcon = require('./style/createBattlerIcon');
const geoJsonStylers = require('./style/geoJsonStylers');
// TODO #Risk

// TODO #Patrician When collide
// TODO >>>>> Modal things in places
// TODO > Transports change velocity & zoom
// TODO Objectives
// TODO Trading materials
// TODO Misiones, traders
// TODO > Traders objectives
// TODO >>>>> #FFnn particles, develop in battles modal
// TODO #CataclysmDDA
// TODO #RimWorld
// TODO #CotND

// const fs = require('fs');
const L = require('leaflet');
global.L = L;

var cryptOfTheNecromancerMode =  'true';
const velocity = 1/33; // Dµº / ms , 80km/h | 12x
// TODO Velocity within ingame options so anyone can handle and keyHandler is not dependant
var refreshRate, defaultMovementLength;
// TODO > Change boolean #CotND
if (cryptOfTheNecromancerMode === "true") { refreshRate = 460; }
// 500 asume <5ms delays! // 500 w/ 120 BPM music
else { refreshRate = 33; } // 30+ FPS
defaultMovementLength = refreshRate * velocity;
var mouseMoved; // = false;
global.layerToRemove = undefined;
global.points = 0;

var gameTimeStamp = new Date(1262304000000);
//#endregion

//#region Create Base Layers
// const map = L.map('map', { scrollWheelZoom: true } );
global.map = L.map(
	'map',
	{
		inertia: true, inertiaMaxSpeed: 1000,
		tilt: true, // moves map
		// w/ mobiles giroscope(deviceOrientation)
		scrollWheelZoom: true, wheelPxPerZoomLevel: 150,
		minZoom: 2, maxZoom: 17
	}
);
global.map.zoomControl.setPosition("bottomright");
const lat  = initialCoords[0]; global.lat = lat; // y
const long = initialCoords[1]; global.long = long; // x
const zoom = initialCoords[2]; // z
global.map.setView([lat, long], zoom);
global.artisticMap = L.tileLayer(
	'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
).addTo(global.map);
const baseLayers = createBaseLayerAndAddMore(global.artisticMap, L);
L.control.scale({imperial:false}).addTo(global.map);
// TODO > Spawn con lng correction
// TODO >>>>> Colores Tileset
// Blanco: mover 1x;
// si no, reducir multiplicador de velocidad y:
//  Menos opacidad (fantasmas) o
//  Spawnear círculo azul ahí durante el refreshtime (GPS)
// Verde: multiplicador velocidad no tan bajo como blanco
// - No se puede entrar fuera del Blanco o verde excepto lugares*
// * -> puerta para permitir cambio color y salida del mismo
// @ tileset artístico zoom 15+*/
//#endregion

//#region Create Characters and sitesMarkersLayers
// TODO > Personalize character #CataclysmDDA + playerIcon "duplicado": imagemagick
const nAvailableAvatars = 39;
// const files = fs.readdirSync('./sprites/player');
// alert(files[Math.ceil(nAvailableAvatars*Math.random())]);
const playerIcon	= L.icon(createLargeIcon('sprites/player/' +
	'marluxia.png'
	// files[Math.ceil(nAvailableAvatars*Math.random())]
));
const player 		= L.marker([lat, long], {icon: playerIcon}).bindPopup(
	'<b>Tú (Meme rookie, lvl. 1)</b>'
);
global.player = player;
// TODO Multiplayer MongoDB or Redis

spawnEnemies(L, lat, long);
spawnObjectives(L, lat, long); // TODO > Thirst, hunger & vol
spawnTransports(L, lat, long);
global.mCharacters = [];
pushCharacters();
const characters = L.layerGroup(global.mCharacters).addTo(global.map);

spawnPlaces(L);
var markers = [];
let element;
for (var i in sites) {
	element = Math.floor(nPlaces*Math.random());
	markers.push(
		L.marker(
			[ sites[i][1], sites[i][2] ],
			{icon: global.placeIconsArray[element]}
		).bindPopup(
			'<b>' + places[element] + '</b>'
		)
	);
}//*/
//spawnPlaces(sites, L, function(markers){
const layers = L.layerGroup(
	markers
).addTo(global.map);
//});
//}); //*/

//#endregion

//#region TODO >>>>> Daemonizers
// let counter = 1;
// Moving with mouse or keypad
if (navigator.userAgent.match('Android|X11') !== null){ // X11 es mi redmi note 3
	alert('¡Bienvenido a DarksGeim! Haz tap para moverte.\n' +
	'No podrás volver a moverte hasta llegar a tu destino, así que...\n' +
	'¡Piensa poco a poco tu jugada!');//*/
	global.map.on('click', onMapClick);//*
} else {
	global.map.on('zoomend', function() {
		const currentZoom = global.map.getZoom();
		if (currentZoom < 15) { // hide places
			if (global.map.hasLayer(layers)) { global.map.removeLayer(layers); }
		} else {
			if (global.map.hasLayer(layers) === false) { global.map.addLayer(layers); }
		}
		if (currentZoom < 12) { // hide characters
			if (global.map.hasLayer(characters)) { global.map.removeLayer(characters); }
		} else {
			if (global.map.hasLayer(characters) === false) { global.map.addLayer(characters); }
		}
	});
}//*/
// let moveDaemonizer;
setInterval(function() {
	// TODO Daemonizer in legend for weather; on add: timeLegend();
	gameTimeStamp += 36000;
	timeLegend();
	/*if (cryptOfTheNecromancerMode !== document.getElementById('hiddenHandlerModeCotND').innerText) {
		cryptOfTheNecromancerMode = document.getElementById('hiddenHandlerModeCotND').innerText;
		if (typeof(cryptOfTheNecromancerMode) === 'string') {clearInterval(moveDaemonizer);}
		if (cryptOfTheNecromancerMode === "true") { refreshRate = 500; } // 120 BPM
		else { refreshRate = 33; } // 30+ FPS
		defaultMovementLength = refreshRate * velocity;
	}*/
}, 3000); // globalEventsDaemonizer*/

let vel, pause;
// const pauseSound = new Sound("../sounds/pause.mp3", 100, true);
function keyListener(refreshRate,defaultMovementLength) { // milliseconds, m
	global.moveDaemonizer = setInterval(function() {
		if (document.getElementById('openModal').innerText === 'true') {
			pause = true;
		} else {
			pause = (
				global.keymap["pause"].includes(
					document.getElementById('hiddenHandlerKeys').innerText
				)
			);
		}
		if (!pause) { enemyMover(defaultMovementLength); } // else { pauseSound.start(); }
		if (document.getElementById('openModal').innerText === 'false') {
			keyHandler(defaultMovementLength);
		}
		if (global.layerToRemove != undefined) {
			global.map.removeLayer( global[layerToRemove] );
			global.layerToRemove = undefined;
		}
		// counter++;
	}, refreshRate);
}
keyListener(
	refreshRate,defaultMovementLength
	//*parseFloat(document.getElementById('health').innerHTML)
); // private params
//#endregion

//#region Move handlers
// TODO Own music
// > TODO Añadir series taylor; correcciones angulares al habilitar ratón
// (x - (x^3 / 6 )) aproxs sin(x) max 7% err
// (1 - x^2 / 2) aproxs cos(x) hasta 60ª
// (1 - x^2 / 2 + x^4 / 24) aproxs cos(x) de 60 a 85º
// 0 aproxs cos(x) from 85 to 90º

// TODO Migrate onMapClick
function onMapClick(e) {
	if (mouseMoved !== true) {
		const mouseClickDaemonizer = setInterval(function() {
			mouseMoved = true;
			vel = defaultMovementLength;
			const latDiff = e.latlng.lat - global.player.getLatLng().lat;
			const lngDiff = e.latlng.lng - global.player.getLatLng().lng;
			let forcedDirection;
			const latDiffAbs = Math.abs(latDiff);
			const lngDiffAbs = Math.abs(lngDiff);
			if (latDiffAbs > lngDiffAbs) {
				if (latDiff>0) {forcedDirection='w';} else {forcedDirection='s';}
			} else {
				if (lngDiff>0) {forcedDirection='d';} else {forcedDirection='a';}
			}
			mH.moveCharacter(global.player, vel, forcedDirection); //movePlayer
			// alert(vars + "strings"); works
			if (defaultMovementLength/50000 > Math.max(latDiffAbs, lngDiffAbs)) {
				clearInterval(mouseClickDaemonizer);
				mouseMoved = false;
			}
		}, refreshRate);
	}
}
//#endregion

//#region geoJson Overlays
const geojson = L.geoJSON(
	regionsAustria,
	{ style: geoJsonStylers.style, onEachFeature: onEachFeature }
);//.addTo(global.map); // Not showing it at start
const overlays = {
    'Regiones': geojson,
	'Puntos de interés': layers,
	'Personajes': characters
};
L.control.layers(baseLayers, overlays).addTo(global.map);
function addGeoJson(jsonPolygonFeature) {
	geojson.addData(jsonPolygonFeature);
}
//#endregion

//#region geoJson Hovering Information show
const info = L.control({position:'topright'});
info.onAdd = function() {
	this._div = L.DomUtil.create('div', 'info');
	this.update();
	return this._div;
};
info.update = function(props) {
	this._div.innerHTML = '' + (props ?
		'<p><b>Population Density</b></p>' + '<b>' + props.name + '</b><br/>' + props.density + ' people / km<sup>2</sup>' :
		'') // 'Hover over a state' + '<p>' + document.getElementById('hiddenHandlerKeys').innerText + '</p>'
	;
};
// let infoUpdaterCounter = 1;
function backgroundInfoUpdater(milliseconds) {
	setInterval(function() {
		let boolChecker;
		boolChecker==null ? boolChecker = true : boolChecker = false;
		info.update = function() {
			this._div.innerHTML = // +=
				'<div class="backendlogs">' +
				'<p><b>Key' + document.getElementById('hiddenHandlerKeys').innerText + '</b></p>';
				'<b>' + boolChecker + '<br/>' + '</b>';
				// infoUpdaterCounter.toString()
				'</div>'
			;
		};
		// infoUpdaterCounter++;
	}, milliseconds);
}
// BackgroundInfoUpdater(3000);
info.addTo(global.map);
//#endregion

//#region geoJson Hovering Visual effects
function highlightFeature(e) {
	const layer = e.target;

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
	global.map.fitBounds(e.target.getBounds());
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
const legend = L.control({position: 'bottomright'});
legend.onAdd = function() {
	const div = L.DomUtil.create('div', 'info legend');
	return div;
};
function formatDate(date) {
	var monthNames = [
		"E", "F", "Mz",
		"Ab", "My", "Jn",
		"Jl", "Ag", "S",
		"O", "N", "D"
	];
	var year = date.getFullYear()%2000;
	var monthIndex = date.getMonth();
	var day = date.getDate();
	var hours = date.getHours();
	var mins = date.getMinutes();

	return year + '/' + monthNames[monthIndex] + '/' + day + ' ' + hours + ':' + mins;
}
function timeLegend(){
	const labels = [formatDate(gameTimeStamp)]; // TODO Weather and region dependencies in legend?
}
legend.addTo(global.map);
// TODO Virtual assistant in help / how to play
// Asistente sens/virt UAL
// Lo añadiré a la lista de cosas que me importan una mierda/pendientes
//#endregion
