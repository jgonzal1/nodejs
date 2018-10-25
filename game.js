//#region Imports
// TODO mobile compatibility
// Leverage mixture ImperioDeLosMares/RimWorld/CataclysmDDA/CryptNecroDancer
const createBaseLayerAndAddMore = require('./providers/createBaseLayerAndAddMore');
const createIcon = require('./style/createIcon');
const geoJsonStylers = require('./style/geoJsonStylers');
const austria = require('./data/austria');
const states = austria();
// const cL = require('./data/charactersList'); const enemies = cL.getEnemies(); const transports = cL.getTransports();
const getSites = require('./data/sites'); const sites = getSites();
// TODO >>>OUTDATED const enemy = require('./spawnEnemies');
// const getPwds = require('./dev.private.js'); still unused here
// TODO enhance response time with this: const mh = require('./moveHandlers'); // ver si mandando player va mejor;
const L = require('leaflet');
//#endregion

//#region Create Base Layers
// TODO ##### take out characters from places view & sites dependance for basemap
const map = L.map('map', { scrollWheelZoom: false } );
// TODO que empiece en ubicación usuario
const coords = [36.836223, -2.466880, 15]; // Presen
// [40.4942011, -3.7101309, 15]; // MADRID
const lat  = coords[0]; // y
const long = coords[1]; // x
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
// TODO Personalizar carácter personaje
// TODO >>>OUTDATED let layers = createCharactersAndPlaces(L, lat, long); /*
const playerIcon	= L.icon(createIcon('style/ratkid-shaded.png'));
// TODO playerIcon "duplicado": personalizado con imagemagick
/*for (let k = 0; k < length(enemies); k++) {
	eval("var "+enemies[k]+"Icon = L.icon(createIcon('sprites/enemies/"+enemies[k]+".png'))");
}
for (let k = 0; k < length(transports); k++) {
	eval("var "+transports[k]+"Icon = L.icon(createIcon('style/"+transports[k]+".png'))");
}*/
const greenIcon		= L.icon(createIcon('style/marker-green.png'));

// spawnAll(L, lat, long);
const bloodyeyeIcon		= L.icon(createIcon('sprites/enemies/bloodyeye.png'));
const deathIcon			= L.icon(createIcon('sprites/enemies/death.png'));
const mummyIcon			= L.icon(createIcon('sprites/enemies/mummy.png'));
const owlIcon			= L.icon(createIcon('sprites/enemies/owl.png'));
const phantomIcon		= L.icon(createIcon('sprites/enemies/phantom.png'));
const pirateskullIcon	= L.icon(createIcon('sprites/enemies/pirateskull.png'));
const skeletonIcon		= L.icon(createIcon('sprites/enemies/skeleton.png'));
const spiderIcon		= L.icon(createIcon('sprites/enemies/spider.png'));
const undeadhandIcon	= L.icon(createIcon('sprites/enemies/undeadhand.png'));
const vampireIcon		= L.icon(createIcon('sprites/enemies/vampire.png'));//*/
const player 			= L.marker([lat, long], {icon: playerIcon}).bindPopup(
	'<b>Tú (Ratkids rookie, lvl. 1)</b>'
);
function spawnEnemy(enemyIcon) {
	return L.marker([lat+(Math.random()-0.5)/30, long+(Math.random()-0.5)/30], {icon: enemyIcon}).bindPopup(
		'<color="red"><b>Enemigo</b></color>'
	);
}
const bloodyeye	= spawnEnemy(bloodyeyeIcon);
const death		= spawnEnemy(deathIcon);
const mummy		= spawnEnemy(mummyIcon);
const owl			= spawnEnemy(owlIcon);
const phantom		= spawnEnemy(phantomIcon);
const pirateskull = spawnEnemy(pirateskullIcon);
const skeleton	= spawnEnemy(skeletonIcon);
const spider		= spawnEnemy(spiderIcon);
const undeadhand	= spawnEnemy(undeadhandIcon);
const vampire		= spawnEnemy(vampireIcon);//*/

var markers = [];
markers.push(
	player,
	bloodyeye,
	death,
	mummy,
	owl,
	phantom,
	pirateskull,
	skeleton,
	spider,
	undeadhand,
	vampire
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
const layers = L.layerGroup(markers).addTo(map);
//#endregion

//#region Daemonizers
//let counter = 1;
function keyListener(milliseconds) {
	const moveDaemonizer = setInterval(function() {
		//const p = Math.random();
		if (L.DomUtil.get(hiddenlogs).innerHTML != 'p') {
			goToPlayer(bloodyeye,0.7);
			goToPlayer(death,0.9);
			goToPlayer(mummy,0.7);
			goToPlayer(owl,0.5);
			goToPlayer(phantom,0.7);
			goToPlayer(pirateskull,0.8);
			goToPlayer(skeleton,0.7);
			goToPlayer(spider,0.5);
			goToPlayer(undeadhand,0.6);
			goToPlayer(vampire,0.5);
		}
		moveCharacter(player);
		// TODO Daemonizer en legend on add: timeLegend();

		//counter++;
	}, milliseconds);
	// clearInterval(moveDaemonizer);
}
keyListener(33); //30+ fps

//TODO Daemonizar freq.2 - música por lugar según regiones

//#endregion

//#region Keys interface
//TODO Esc para X
//TODO Tab para siguiente en menú
//#endregion

//#region Move handlers
// TODO > add that sth happens when colide/near : capa de combate o algo en grande
// TODO >>>>> añadir series taylor; correcciones angulares
// (x - (x^3 / 6 )) aproxs sin(x) max 7% err
// (1 - x^2 / 2) aproxs cos(x) hasta 60ª
// (1 - x^2 / 2 + x^4 / 24) aproxs cos(x) de 60 a 85º
// 0 aproxs cos(x) from 85 to 90º
// TODO > poder hacer click para ir, carreteras preferidas
// TODO Detectar dos botones a la vez (ej. W+A)
// TODO Batallas, con efectos de sonido, y en popup del de BDiA-showcase
// TODO Medios transporte (2/2)
// TODO > Modo bajo refreshtime para pseudo Crypt NecroDancer, click opción para establecer tempo refresh y beat.
function goToPlayer(target, velocity) {
	velocity = ( velocity || 1 );
	const latDiff = player.getLatLng().lat - target.getLatLng().lat;
	const lngDiff = player.getLatLng().lng - target.getLatLng().lng;
	let forcedDirection;
	if (Math.abs(latDiff) > Math.abs(lngDiff)) {
		if (latDiff>0) {forcedDirection='w';} else {forcedDirection='s';}
	} else {
		if (lngDiff>0) {forcedDirection='d';} else {forcedDirection='a';}
	}
	moveCharacter(target, forcedDirection, velocity);
}

function moveCharacter(character, forceDirection, velocity, movemap) { // 80km/h | 12x
	character = ( character || player );
	velocity = ( velocity || 1 );
	movemap = (movemap || ['w', 'a', 's', 'd', ' '] );
	const direction = (forceDirection || L.DomUtil.get(hiddenlogs).innerHTML);
	switch (direction) { //forceDirection
	case movemap[0]:
		character.setLatLng(L.latLng(character.getLatLng().lat+0.00001*velocity,character.getLatLng().lng));
		break;
	case movemap[1]:
		character.setLatLng(L.latLng(character.getLatLng().lat,character.getLatLng().lng-0.00001*velocity));
		break;
	case movemap[2]:
		character.setLatLng(L.latLng(character.getLatLng().lat-0.00001*velocity,character.getLatLng().lng));
		break;
	case movemap[3]:
		character.setLatLng(L.latLng(character.getLatLng().lat,character.getLatLng().lng+0.00001*velocity));
		break;
	case movemap[4]:
		break;
	}
}
//#endregion

//#region geoJson Overlayers
const geojson = L.geoJSON(
	states,
	{ style: geoJsonStylers.style, onEachFeature: onEachFeature }
);//.addTo(map); //not showing it at start
const overlays = {
    'Regiones': geojson,
    'Puntos de interés': layers
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
	this._div.innerHTML = '<p><b>Population Density</b></p>' + (props ?
		'<b>' + props.name + '</b><br/>' + props.density + ' people / km<sup>2</sup>' :
		'Hover over a state') // + '<p>' + L.DomUtil.get(hiddenlogs).innerHTML + '</p>'
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
				'<p><b>Key' + L.DomUtil.get(hiddenlogs).innerHTML + '</b></p>';
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
// TODO >>>>> leyenda dependiente de vista de regiones
const legend = L.control({position: 'bottomright'});
legend.onAdd = function() {
	const div = L.DomUtil.create('div', 'info legend'),
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
	}

	div.innerHTML = labels.join('<br>');
	return div;
};
function timeLegend(){
	labels.push(); // TODO Tiempo y dependencias en legend?
}
legend.addTo(map);
// TODO Asistente virtual en ayuda / cómo jugar
// Asistente sens/virt UAL
// Lo añadiré a la lista de cosas que me importan una mierda/pendientes
//*/
//#endregion
