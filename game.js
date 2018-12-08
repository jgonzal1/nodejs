//#region Imports
const pushCharacters = require('./assets/pushCharacters');
const spawnEnemies = require('./assets/spawnEnemies');
const spawnObjectives = require('./assets/spawnObjectives');
const spawnRegionsAustria = require('./data/regionsAustria');
const regionsAustria = spawnRegionsAustria();
const spawnSites = require('./data/sites');
const sites = spawnSites.getSites();
const initialCoords = spawnSites.getInitialCoords()["España.Madrid.Mirasiera"];
// TODO > Que empiece en ubicación usuario document.getElementById('hiddenHandlerPos').innerText.split(",")[0]/[1] + redis
const createBaseLayerAndAddMore = require('./providers/createBaseLayerAndAddMore');
const createLargeIcon = require('./style/createLargeIcon');
const createModalTriggerIcon = require('./style/createModalTriggerIcon');
const geoJsonStylers = require('./style/geoJsonStylers');
// TODO > #Risk

// TODO Delete objectives when taken
// TODO #Patrician When collide
// TODO >>>>> modal cosas en places
// TODO > transports cambian velocidad y zoom
// TODO > objectives
// TODO trading materials
// TODO misiones, traders
// TODO > traders objectives
// TODO > #FFnn partículas. desarrolar modal de batallas
// TODO #CataclysmDDA
const spawnTransports = require('./assets/spawnTransports');
const mH = require('./assets/moveHandlers');
// TODO #RimWorld
// TODO #CotND

// const fs = require('fs');
const L = require('leaflet');
global.L = L;

var cryptOfTheNecromancerMode =  'true';
const velocity = 1/33; // Dµº / ms
var refreshRate, defaultMovementLength;
// TODO > Botón que cambie booleano #CotND
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
	{ inertia: true, inertiaMaxSpeed: 1000, scrollWheelZoom: true, minZoom: 2, maxZoom: 17 }
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
/* TODO > Colores Tileset
Blanco: detectarlo en tileset permite mover 1x;
si no, reducir multiplicador de velocidad y:
 Menos opacidad (fantasmas) o
 Spawnear círculo azul ahí durante el refreshtime (GPS)
Verde: multiplicador velocidad no tan bajo como blanco
- No se puede entrar fuera del Blanco o verde excepto lugares*
*Lugares -> puerta para permitir cambio color y salida del mismo
@ tileset artístico zoom 15+*/
//#endregion

//#region Create Characters and sitesMarkersLayers
// TODO > Personalizar carácter personaje #CataclysmDDA + playerIcon "duplicado": personalizado con imagemagick
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
// TODO Multiplayer MongoDB o Redis

spawnEnemies(L, lat, long);
spawnObjectives(L, lat, long); // TODO > thirst, hunger & vol
spawnTransports(L, lat, long);
global.mCharacters = [];
pushCharacters();
const characters = L.layerGroup(global.mCharacters).addTo(global.map);

// const lightHouseIcon = L.icon(createLargeIcon('style/places/light_house.png'));
// const portIcon = L.icon(createLargeIcon('style/places/port.png'));
const bankIcon = L.icon(createLargeIcon('style/places/bank.png'));
const blockhousesIcon = L.icon(createLargeIcon('style/places/blockhouses.png'));
const castleIcon = L.icon(createLargeIcon('style/places/castle.png'));
const chemistryIcon = L.icon(createLargeIcon('style/places/chemistry.png'));
const cornshopIcon = L.icon(createLargeIcon('style/places/cornshop.png'));
const gasStationIcon = L.icon(createLargeIcon('style/places/gas_station.png'));
const greenIcon = L.icon(createLargeIcon('style/places/house.png'));
const houseIcon = L.icon(createLargeIcon('style/places/house.png'));
const signIcon = L.icon(createLargeIcon('style/places/sign.png'));
const store2Icon = L.icon(createLargeIcon('style/places/store2.png'));
const store3Icon = L.icon(createLargeIcon('style/places/store3.png'));
const tentIcon = L.icon(createLargeIcon('style/places/tent.png'));
const tree1Icon = L.icon(createLargeIcon('style/places/tree1.png'));
const tree2Icon = L.icon(createLargeIcon('style/places/tree2.png'));
const tree3Icon = L.icon(createLargeIcon('style/places/tree3.png'));
const tree4Icon = L.icon(createLargeIcon('style/places/tree4.png'));
const treesIcon = L.icon(createLargeIcon('style/places/trees.png'));
const vendingIcon = L.icon(createLargeIcon('style/places/vending.png'));
const placeIconsArray = [
	//lightHouseIcon,
	//portIcon,
	bankIcon,
	blockhousesIcon,
	castleIcon,
	chemistryIcon,
	cornshopIcon,
	gasStationIcon,
	houseIcon,
	signIcon,
	store2Icon,
	store3Icon,
	tentIcon,
	tree1Icon,
	tree2Icon,
	tree3Icon,
	tree4Icon,
	treesIcon,
	vendingIcon
];
var places = [
	"bank",
	"blockhouses",
	"castle",
	"chemistry",
	"cornshop",
	"gas_station",
	"house",
	"sign",
	"store2",
	"store3",
	"tent",
	"tree1",
	"tree2",
	"tree3",
	"tree4",
	"trees",
	"vending"
	//"light_house",
	//"port",
];
var nPlaces = 17; //18
var markers = [];
let element;
for (var i in sites) {
	element = Math.floor(nPlaces*Math.random());
	markers.push(
		L.marker(
			[
				sites[i][1],
				sites[i][2]
			],
			{icon: placeIconsArray[element]}
		).bindPopup(
			'<b>' + places[element] + '</b>'
		)
	);
}
const layers = L.layerGroup(markers).addTo(global.map);
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
	//alert('Bienvenido a DarksGeim. Utiliza WASD para moverte,\n'+
	//'P para pausar, la rueda del ratón para elk zoom,\n'+
	//'y ←↑↓→ para mover el mapa');
}//*/
// let moveDaemonizer;
setInterval(function() {
	// TODO Daemonizer en legend para tiempo del día; on add: timeLegend();
	gameTimeStamp += 36000;
	timeLegend();
	/*if (cryptOfTheNecromancerMode !== document.getElementById('hiddenHandlerModeCotND').innerText) {
		cryptOfTheNecromancerMode = document.getElementById('hiddenHandlerModeCotND').innerText;
		// if (typeof(cryptOfTheNecromancerMode) === 'string') {clearInterval(moveDaemonizer);}
		if (cryptOfTheNecromancerMode === "true") {
			refreshRate = 500; // w/ 120 BPM music
		} else {
			refreshRate = 33; // 30+ FPS
		}
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
			pause = (document.getElementById('hiddenHandlerKeys').innerText === 'p');
		}
		if (!pause) {
			// pauseSound.start();
			// pauseSound.stop();
			// TODO enemies properties
			// TODO only 1 healthHandler (not big in html!)
			//mH.goToPlayer(global.bloodyeye,0.7*defaultMovementLength);
			mH.goToPlayer(global.death,0.9*defaultMovementLength);
			mH.goToPlayer(global.dracula,0.8*defaultMovementLength);
			mH.goToPlayer(global.empire1,0.4*defaultMovementLength);
			mH.goToPlayer(global.empire2,0.4*defaultMovementLength);
			mH.goToPlayer(global.gollum,0.4*defaultMovementLength);
			mH.goToPlayer(global.jabba,0.1*defaultMovementLength);
			mH.goToPlayer(global.joker,Math.random()*1.2*defaultMovementLength);
			mH.goToPlayer(global.mummy,0.7*defaultMovementLength);
			//mH.goToPlayer(global.owl,0.5*defaultMovementLength);
			mH.goToPlayer(global.phantom,0.7*defaultMovementLength);
			//mH.goToPlayer(global.pirateskull,0.8*defaultMovementLength);
			mH.goToPlayer(global.skeleton,0.7*defaultMovementLength);
			mH.goToPlayer(global.spider,0.5*defaultMovementLength);
			//mH.goToPlayer(global.undeadhand,0.6*defaultMovementLength);
			//mH.goToPlayer(global.vampire,0.5*defaultMovementLength);
		} else {
			// pauseSound.start();
		}
		if (document.getElementById('openModal').innerText === 'false') {
			mH.movePlayer(global.player,defaultMovementLength);
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

//#region Keys interface
// TODO keys menú
//#endregion

//#region Move handlers
// TODO Own music
// TODO Añadir series taylor; correcciones angulares al habilitar ratón
// (x - (x^3 / 6 )) aproxs sin(x) max 7% err
// (1 - x^2 / 2) aproxs cos(x) hasta 60ª
// (1 - x^2 / 2 + x^4 / 24) aproxs cos(x) de 60 a 85º
// 0 aproxs cos(x) from 85 to 90º
// TODO Detectar dos botones a la vez (ej. W+A)

// TODO Migrar onMapClick
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
			mH.movePlayer(global.player, vel, forcedDirection);
			// alert(vars + "strings"); works
			if (defaultMovementLength/50000 > Math.max(latDiffAbs, lngDiffAbs)) {
				clearInterval(mouseClickDaemonizer);
				mouseMoved = false;
			}
		}, refreshRate);
	}
}
// TODO Inhabilitar para su uso el right-click = contextmenu; left-click = click
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

//#region geolocation control to follow the user's location
/*
const locateControl = L.control.locate({
	position: "bottomright",
	drawCircle: true,
	follow: true,
	setView: true,
	keepCurrentZoomLevel: true,
	markerStyle: {
		weight: 1,
		opacity: 0.8,
		fillOpacity: 0.8
	},
	circleStyle: {
		weight: 1,
		clickable: false
	},
	icon: "fa fa-location-arrow",
	metric: false,
	strings: {
		title: "My location",
		popup: "You are within {distance} {unit} from this point",
		outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
	},
	locateOptions: {
		maxZoom: 18,
		watch: true,
		enableHighAccuracy: true,
		maximumAge: 10000,
		timeout: 10000
	}
}).addTo(global.map);
locateControl.start();*/
//#endregion

//#region Legend
const legend = L.control({position: 'bottomright'});
legend.onAdd = function() {
	const div = L.DomUtil.create('div', 'info legend');/*,
		grades = [1, 70, 80, 100, 130, 1000],
		labels = ["personas/km²"];
	let from, to;

	for(let i = 0; i < grades.length; i++) {
		from = grades[i];
		to = grades[i + 1];
		labels.push(
			'<i style="background:' + geoJsonStylers.getColor(from + 1) + '">' +
				'<font color=' + geoJsonStylers.getColor(from + 1) + '>__</font>' +
			'</i> ' + from + (to ? '&ndash;' + to : '+'));
	}*/
	//div.innerHTML = [formatDate(gameTimeStamp)]; // labels.join('<br>');
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
	const labels = [formatDate(gameTimeStamp)]; // TODO Tiempo y dependencias de regiones en legend?
}
legend.addTo(global.map);
// TODO Asistente virtual en ayuda / cómo jugar
// Asistente sens/virt UAL
// Lo añadiré a la lista de cosas que me importan una mierda/pendientes
//#endregion
