const objectiveStatsHandler = require('./objectiveStatsHandler');
const mH = require("./moveHandlers");
const cL = require('../data/charactersList');

const objectives = cL.getObjectives();
const nStepSounds = 2, nAttackSounds = 2;
let displayAttackPositionAlert = true;
let stepSound, attackSound;

function keyHandler(velocity) {
	velocity = ( velocity || 1 );
    let nearestObjetive, distancesArray, nearestObjetiveIndex, itemDescription, atk;
	const direction = document.getElementById('hiddenHandlerKeys').innerText;
	switch (direction) {
	case global.keymap["moveEast"][0]:
	case global.keymap["moveEast"][1]:
	case global.keymap["moveEast"][2]:
	case global.keymap["moveNorth"][0]:
	case global.keymap["moveNorth"][1]:
	case global.keymap["moveNorth"][2]:
	case global.keymap["moveSouth"][0]:
	case global.keymap["moveSouth"][1]:
	case global.keymap["moveSouth"][2]:
	case global.keymap["moveWest"][0]:
	case global.keymap["moveWest"][1]:
	case global.keymap["moveWest"][2]:
		stepSound = new Audio("../sounds/step"+Math.ceil(nStepSounds*Math.random())+".wav");
		stepSound.play();
		mH.moveCharacter(global.player, velocity, direction);
		break;
	case global.keymap["pickOrSearchNearest"][0]:
		//alert('Calculando distancia...');
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
		nearestObjetive = Math.min( // distancesArray
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
			mH.fcalcDist(global.water)//*/
		);
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
		if (displayAttackPositionAlert === false) { 
			displayAttackPositionAlert = true;
		}
		break;
	case global.keymap["wield"][0]:
	case global.keymap["wield"][1]:
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
	case global.keymap["yes"][0]:
	case global.keymap["yes"][1]:
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
		var colorSniffer = document.getElementById("floorColorSniffCanvas");
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