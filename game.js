//#region Imports
// TODO Leverage mixture ImperioDeLosMares/Risk/RimWorld/CataclysmDDA/CotND/FFnn
const createBaseLayerAndAddMore = require('./providers/createBaseLayerAndAddMore');
const createIcon = require('./style/createIcon');
const geoJsonStylers = require('./style/geoJsonStylers');
const austria = require('./data/austria');
const states = austria();
const getSites = require('./data/sites'); const sites = getSites();
// TODO charlist: const cL = require('./data/charactersList');
const spawnEnemies = require('./spawnEnemies');
const spawnObjectives = require('./spawnObjectives');
const spawnTransports = require('./spawnTransports');
const mH = require('./moveHandlers');
const L = require('leaflet');
global.L = L;
var cryptOfTheNecromancerMode =  'true';
const velocity = 1/33; // Dµº / ms
var refreshRate, defaultMovementLength;
if (cryptOfTheNecromancerMode === "true") {
	refreshRate = 500; // asume <5ms delays! // 500 w/ 120 BPM music
} else {
	refreshRate = 33; // 30+ FPS
}
defaultMovementLength = refreshRate * velocity;
var mouseMoved; // = false;
var gameTimeStamp = new Date(1262304000000);
//#endregion

//#region Create Base Layers
const map = L.map('map', { scrollWheelZoom: true } );
// TODO Que empiece en ubicación usuario L.DomUtil.get(hiddenHandlerPos).innerHTML.split(",")[0]/[1]
const coords = [40.4942011, -3.7101309, 15]; // MADRID
const lat  = coords[0]; global.lat = lat; // y
const long = coords[1]; global.long = long; // x
const zoom = coords[2]; // z
map.setView([lat, long], zoom);
const artisticMap = L.tileLayer(
	'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
	{ minZoom: 2, maxZoom: 17 }
).addTo(map);
/* TODO Colores Tileset
Blanco: para enemigos y algunas personas: detectarlo en tileset permite mover 1x; si no, reducir multiplicador de velocidad y:
 Menos opacidad (fantasmas) o
 Spawnear círculo azul ahí durante el refreshtime (GPS)
Verde: multiplicador velocidad no tan bajo como blanco
- No se puede entrar fuera del Blanco o verde excepto lugares*
*Lugares -> puerta para permitir cambio color y salida del mismo
@ tileset artístico zoom 15+*/
const baseLayers = createBaseLayerAndAddMore(artisticMap, L);
//#endregion

//#region Create Characters and Places
// TODO > Personalizar carácter personaje + playerIcon "duplicado": personalizado con imagemagick
const playerIcon	= L.icon(createIcon('style/ratkid-shaded.png'));
const greenIcon		= L.icon(createIcon('style/marker-green.png'));

spawnEnemies(L, lat, long);
spawnObjectives(L, lat, long);
spawnTransports(L, lat, long);
const player 		= L.marker([lat, long], {icon: playerIcon}).bindPopup(
	'<b>Tú (Ratkids rookie, lvl. 1)</b>'
);
// TODO Multiplayer MongoDB
global.player = player;

var mCharacters = [];
var markers = [];
mCharacters.push(
	global.player,
	
	global.bloodyeye,
	global.death,
	global.mummy,
	global.owl,
	global.phantom,
	global.pirateskull,
	global.skeleton,
	global.spider,
	global.undeadhand,
	global.vampire,

	global.biscuit,
	global.burger,
	global.chococookie,
	global.chocolate,
	global.cupcake,
	global.donut,
	global.fries,
	global.icecream,
	global.pizza,
	global.popcorn,
	global.potatoes,
	global.poti,
	global.taco,

	global.baloon,
	global.bike,
	global.bus,
	//global.car, 
	//global.moto,
	global.plane,
	//global.taxi,
	global.train,
	global.truck
);
for (var i in sites) {
    markers.push(
		L.marker(
			[
				sites[i][1],
				sites[i][2]
			],
			{icon: greenIcon}
		).bindPopup(
			'<b>' + sites[i][0] + '</b>'
		)
	);
}
const characters = L.layerGroup(mCharacters).addTo(map);
const layers = L.layerGroup(markers).addTo(map);
//#endregion

//#region Daemonizers
//let counter = 1;
if (navigator.userAgent.match('Android|X11') !== null){ //X11 es mi redmi note 3
	alert('¡Bienvenido a DarksGeim! Haz tap para moverte.\n' +
	'No podrás volver a moverte hasta llegar a tu destino, así que...\n' +
	'¡Piensa poco a poco tu jugada!');
	map.on('click', onMapClick);
} else {
	/*alert('Bienvenido a DarksGeim. Utiliza WASD para moverte,\n'+
	'P para pausar, la rueda del ratón para elk zoom,\n'+
	'y ←↑↓→ para mover el mapa');*/
}
// let moveDaemonizer;
setInterval(function() {
	// TODO > Daemonizer en legend para tiempo del día; on add: timeLegend();
	gameTimeStamp += 36000;
	timeLegend();
	/*if (cryptOfTheNecromancerMode !== L.DomUtil.get(hiddenHandlerModeCotND).innerHTML) {
		cryptOfTheNecromancerMode = L.DomUtil.get(hiddenHandlerModeCotND).innerHTML;
		//if (typeof(cryptOfTheNecromancerMode) === 'string') {clearInterval(moveDaemonizer);}
		if (cryptOfTheNecromancerMode === "true") {
			refreshRate = 500; // w/ 120 BPM music
		} else {
			refreshRate = 33; // 30+ FPS
		}
		defaultMovementLength = refreshRate * velocity;
	}*/
}, 3000); //globalEventsDaemonizer*/

function keyListener(refreshRate,defaultMovementLength) { //milliseconds, m
	global.moveDaemonizer = setInterval(function() {
		if (L.DomUtil.get(hiddenHandlerKeys).innerHTML != 'p') {
			mH.goToPlayer(bloodyeye,0.7*defaultMovementLength);
			mH.goToPlayer(death,0.9*defaultMovementLength);
			mH.goToPlayer(mummy,0.7*defaultMovementLength);
			mH.goToPlayer(owl,0.5*defaultMovementLength);
			mH.goToPlayer(phantom,0.7*defaultMovementLength);
			mH.goToPlayer(pirateskull,0.8*defaultMovementLength);
			mH.goToPlayer(skeleton,0.7*defaultMovementLength);
			mH.goToPlayer(spider,0.5*defaultMovementLength);
			mH.goToPlayer(undeadhand,0.6*defaultMovementLength);
			mH.goToPlayer(vampire,0.5*defaultMovementLength);
		}
		mH.moveCharacter(global.player,defaultMovementLength);

		//counter++;
	}, refreshRate);
}
keyListener(refreshRate,defaultMovementLength);//refreshRate,defaultMovementLength
//#endregion

//#region Keys interface
//TODO Esc para X
//TODO Tab para siguiente en menú
//#endregion

//#region Move handlers
// TODO >>>>> When colide/near : capa de combate o comercio, con efectos de sonido, y en popup del de BDiA-showcase
// TODO Añadir series taylor; correcciones angulares al habilitar ratón
// (x - (x^3 / 6 )) aproxs sin(x) max 7% err
// (1 - x^2 / 2) aproxs cos(x) hasta 60ª
// (1 - x^2 / 2 + x^4 / 24) aproxs cos(x) de 60 a 85º
// 0 aproxs cos(x) from 85 to 90º
// TODO Detectar dos botones a la vez (ej. W+A)
// TODO > Botón que cambie booleano Crypt NecroDancer
// TODO > Migrar onMapClick
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
			mH.moveCharacter(global.player, vel, forcedDirection);
			//alert(vars + "strings"); works
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
	states,
	{ style: geoJsonStylers.style, onEachFeature: onEachFeature }
);//.addTo(map); //not showing it at start
const overlays = {
    'Regiones': geojson,
	'Puntos de interés': layers,
	'Personajes': characters
};
L.control.layers(baseLayers, overlays).addTo(map);
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
		'') // 'Hover over a state' + '<p>' + L.DomUtil.get(hiddenHandlerKeys).innerHTML + '</p>'
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
				'<p><b>Key' + L.DomUtil.get(hiddenHandlerKeys).innerHTML + '</b></p>';
				'<b>' + boolChecker + '<br/>' + '</b>';
				// infoUpdaterCounter.toString()
				'</div>'
			;
		};
		// infoUpdaterCounter++;
	}, milliseconds);
}
//backgroundInfoUpdater(3000);
info.addTo(map);
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
// TODO Leyenda dependiente de vista de regiones
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
	div.innerHTML = [formatDate(gameTimeStamp)]; //labels.join('<br>');
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
	labels = [formatDate(gameTimeStamp)]; // TODO Tiempo y dependencias en legend?
}
legend.addTo(map);
// TODO Asistente virtual en ayuda / cómo jugar
// Asistente sens/virt UAL
// Lo añadiré a la lista de cosas que me importan una mierda/pendientes
//*/
//#endregion
