const objectiveStatsHandler = require('./objectiveStatsHandler');
const mH = require("./moveHandlers");
const cL = require('../data/charactersList');

const objectives = cL.getObjectives();
const nStepSounds = 2, nAttackSounds = 2;
let displayAttackPositionAlert = true;
let stepSound, attackSound;

function keyHandler(velocity) {
	velocity = ( velocity || 1 );
    let nearestObjective, distancesArray, nearestObjectiveIndex, itemDescription, atk;
	const pressedKey = document.getElementById('hiddenHandlerKeys').innerText;
	if (document.getElementById("keyChange").innerText != "false") { switch (pressedKey) {
		//#region Top_Menu
		case global.keymap["help"][0]:
		case global.keymap["help"][1]:
		case global.keymap["help"][2]:
			break;
		case global.keymap["music"][0]:
		case global.keymap["music"][1]:
			break;
		case global.keymap["build"][0]:
		case global.keymap["build"][1]:
		case global.keymap["build"][2]:
		case global.keymap["craft"][0]:
			document.getElementById('openModal').innerText = 'true';
			$("#buildModal").modal("show");
			$(".navbar-collapse.in").collapse("hide");
			break;
		case global.keymap["factions"][0]:
		case global.keymap["treats"][0]:
			document.getElementById('openModal').innerText = 'true';
			$("#factionsModal").modal("show");
			$(".navbar-collapse.in").collapse("hide");
			break;
		case global.keymap["fleet"][0]:
			document.getElementById('openModal').innerText = 'true';
			$("#fleetModal").modal("show");
			$(".navbar-collapse.in").collapse("hide");
			break;
		case global.keymap["playerInfo"][0]:
		case global.keymap["viewMorale"][0]:
			document.getElementById('openModal').innerText = 'true';
			$("#skillsModal").modal("show");
			$(".navbar-collapse.in").collapse("hide");
			break;
		case global.keymap["research"][0]:
			document.getElementById('openModal').innerText = 'true';
			$("#researchModal").modal("show");
			$(".navbar-collapse.in").collapse("hide");
			break;
		case global.keymap["journal"][0]:
		case global.keymap["journal"][1]:
			document.getElementById('openModal').innerText = 'true';
			$("#missionsModal").modal("show");
			$(".navbar-collapse.in").collapse("hide");
			break;
		case global.keymap["options"][0]:
			break;
		case global.keymap["toggleStats"][0]:
			break;//*/
		//#endregion
		//#region Top_Menu/Options
		case global.keymap["goToSpawn"][0]:
			break;
		case global.keymap["sorceries"][0]:
			document.getElementById('openModal').innerText = 'true';
			$("#sorceriesModal").modal("show");
			$(".navbar-collapse.in").collapse("hide");
			break;
		case global.keymap["keys"][0]:
			document.getElementById('openModal').innerText = 'true';
			$("#keysModal").modal("show");
			$(".navbar-collapse.in").collapse("hide");
			break;
		case global.keymap["login"][0]:
			document.getElementById('openModal').innerText = 'true';
			$("#loginModal").modal("show");
			$(".navbar-collapse.in").collapse("hide");
			break;
		case global.keymap["saveQuit"][0]:
			/*document.getElementById('openModal').innerText = 'true';
			$("#saveModal").modal("show");
			$(".navbar-collapse.in").collapse("hide");*/
			break;//*/
		//#endregion
		//#region Left_Menu
		case global.keymap["inventory"][0]:
			break;
		case global.keymap["leaveItem"][0]:
			break;
		case global.keymap["manageInventory"][0]:
			break;
		case global.keymap["swapInventoryLetters"][0]:
			break;
		case global.keymap["takeOut"][0]:
			break;
		//*/
		//#endregion
		//#region Map/ObjectiveInteraction
		case global.keymap["open"][0]:
			// TODO game is dealing with this out of scope layers reference
			break;
		case global.keymap["read"][0]:
		case global.keymap["wear"][0]:
		case global.keymap["examine"][0]:
		case global.keymap["examine"][1]:
		case global.keymap["use"][0]:
		case global.keymap["vehicleHandbrake"][0]://*/
		case global.keymap["pickOrSearchNearest"][0]: // only one completed
		//case global.keymap["unWield"][0]:
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
			nearestObjective = Math.min( // distancesArray
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
			nearestObjectiveIndex = distancesArray.indexOf(Math.min(...distancesArray));
			if (nearestObjective < 0.0002) {
				itemDescription = objectiveStatsHandler(objectives[nearestObjectiveIndex]);
				alert('¡Has conseguido ' + itemDescription + ', al recoger ' + objectives[nearestObjectiveIndex] +'!');
				global.layerToRemove = objectives[nearestObjectiveIndex];
				global.points += 1;			
			} else {
				alert(
					'¡Tu objetivo más cercano aún está a ' + Math.round(5000*nearestObjective) + ' pasos y\n' +
					'es: ' + objectives[nearestObjectiveIndex] + '!'
				);
			}
			if (displayAttackPositionAlert === false) { 
				displayAttackPositionAlert = true;
			}
			break;
		//#endregion
		//#region +
		/*// Enemies & Vehicles advanced
		"grabVehicle":["G"]
		"controlVehicle":["^"]
		"ignoreRearestEnemy":["'"]
		"toggleSafemode":["!"]

		// Map advanced
		"run":["\""]
		"sleep":["$"]
		"unArm":["_"]
		"waitLong":["|"]

		// Advanced
		"no":["n"]
		"listOfActions":["%"]
		"chatMenu":["C"]
		"debugModal":["~"]
		"viewMessages":["Shift+M"]

		// Unimplemented
		"close":["c"]
		"compare":["I"]
		"kick":["k"]
		"killCount":[")"]
		"reload":["R"]
		"recraftLast":["-"]*/
		//#endregion
		default:
			document.getElementById('hiddenHandlerKeys').innerText = global.keymap["pause"][0];
			break;
	}}
	switch (pressedKey) {
		//#region Map/MoveCharacter
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
			mH.moveCharacter(global.player, velocity, pressedKey);
			break;
		//#endregion
		//#region Objectives
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
		//#endregion
		//#region Advanced
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
		//#endregion
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

module.exports = keyHandler;