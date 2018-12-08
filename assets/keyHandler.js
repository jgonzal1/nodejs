const objectiveStatsHandler = require('./objectiveStatsHandler');
const mH = require("./moveHandlers");
const cL = require('../data/charactersList');

const lngCorrectionArr = mH.getLngCorrectionArr();
const objectives = cL.getObjectives();
const nStepSounds = 2, nAttackSounds = 2;
let displayAttackPositionAlert = true;
let stepSound, attackSound;

function keyHandler(velocity, keymap) { // 80km/h | 12x
	velocity = ( velocity || 1 );
	const velLng = velocity * lngCorrectionArr[Math.round(global.lat)];
	keymap = ( keymap || ['w', 'a', 's', 'd', ' ', 'e', 'y'] );
    let nearestObjetive, distancesArray, nearestObjetiveIndex, itemDescription, atk;
	const direction = document.getElementById('hiddenHandlerKeys').innerText;
	switch (direction) {
	case keymap[0]:
	case keymap[1]:
	case keymap[2]:
	case keymap[3]:
		stepSound = new Audio("../sounds/step"+Math.ceil(nStepSounds*Math.random())+".wav");
		stepSound.play();
		mH.moveCharacter(global.player, velocity, direction, keymap);
		break;
	case keymap[4]: // [ ]
		distancesArray = [
			mH.fcalcDist(global.backpack),
			mH.fcalcDist(global.burger),
			mH.fcalcDist(global.banana),
			mH.fcalcDist(global.blackberry),
			mH.fcalcDist(global.boots),
			mH.fcalcDist(global.chicken),
			mH.fcalcDist(global.healthpotion),
			mH.fcalcDist(global.knife),
			mH.fcalcDist(global.pizza),
			mH.fcalcDist(global.rice),
			mH.fcalcDist(global.steelaxe),
			mH.fcalcDist(global.sword),
			mH.fcalcDist(global.water)
		];
		nearestObjetive = Math.min(distancesArray);
		nearestObjetiveIndex = distancesArray.indexOf(Math.min(...distancesArray));
		if (nearestObjetive < 0.0002) {
			itemDescription = objectiveStatsHandler(objectives[nearestObjetiveIndex]);
			alert('¡Has conseguido ' + itemDescription + ', al recoger ' + objectives[nearestObjetiveIndex] +'!');
			global.layerToRemove = objectives[nearestObjetiveIndex];
			global.points += 1;			
		} else {
			alert(
				'¡Tu objetivo más cercano aún está a ' + Math.round(5000*nearestObjetive) + ' pasos y\n' +
				'es: ' + objectives[nearestObjetiveIndex] + '!'
			);
		}
		if (displayAttackPositionAlert === false) { // TODO for all player attack position disruption cases
			displayAttackPositionAlert = true;
		}
		break;
	case keymap[5]: // 'E'
		atk = parseFloat(document.getElementById('atk').innerHTML);
		if (atk === 0) {
			alert('¡Necesitas un arma para activar la posición de ataque!');		
		} else {
			if (document.getElementById('openModal').innerText === 'false') {
				attackSound = new Audio("../sounds/attack"+Math.ceil(nAttackSounds*Math.random())+".wav");
				attackSound.play();
			}
			if (displayAttackPositionAlert === true) {
				alert('¡Activando posición de ataque!');
				displayAttackPositionAlert = false;
			}
		}
		break;
	case keymap[6]: // 'Y'
		var a = getColor(global.player.getLatLng());
		if (a !== null) {
			alert(a);
			var hex = "#" + (0x1000000 + (a[0] << 16) + (a[1] << 8) + a[2]).toString(16).substr(1);
			var tmpl = "<b style='background:@;color:black;'>@</b>";
			if (Math.min(a[0], a[1], a[2]) < 0x40)
			{
				tmpl = tmpl.replace("black", "white");
			}
			/*map.attributionControl.setPrefix*/alert(tmpl.replace(/@/g, hex));
		} else {
			/*map.attributionControl.setPrefix*/alert("Color unavailable");
		}
		break;
	}
}

function getColor(latlng) {
	var size = global.artisticMap.getTileSize();
	var point = global.artisticMap._map.project(latlng, global.artisticMap._tileZoom).floor();
	var coords = point.unscaleBy(size).floor();
	var offset = point.subtract(coords.scaleBy(size));
	coords.z = global.artisticMap._tileZoom;
	var tile = global.artisticMap._tiles[global.artisticMap._tileCoordsToKey(coords)];
	if (!tile || !tile.loaded) { return null; }
	try {
		var colorSniffer = document.getElementById("testsCanvas");
		var contextSniffer = colorSniffer.getContext('2d');
		// tile.el.crossOrigin = "Anonymous";		
		contextSniffer.drawImage(tile.el, -offset.x, -offset.y, size.x, size.y);
		return alert(contextSniffer.getImageData(8, 8, 1, 1).data); // 0, 0, 1, 1
	} catch (e) {
		return e;
	}
}//*/

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

module.exports = keyHandler;