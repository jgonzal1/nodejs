const getColor = require('./getColor');
const mH = require("./moveHandlers");
const objectiveInteractor = require("./objectiveInteractor");

const nStepSounds = 9, nAttackSounds = 2;
let stepSound, attackSound;

function keyHandler(velocity) {
	velocity = ( velocity || 1 );
    let atk;
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
		case global.keymap["read"][0]:
		case global.keymap["wear"][0]:
		case global.keymap["examine"][0]:
		case global.keymap["examine"][1]:
		case global.keymap["use"][0]:
		case global.keymap["vehicleHandbrake"][0]://*/
		case global.keymap["pickOrSearchNearest"][0]: // only one completed
		//case global.keymap["unWield"][0]:
			objectiveInteractor();
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
			stepSound = new Audio("../sounds/step/step"+Math.ceil(nStepSounds*Math.random())+".wav");
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
			break;
		//#endregion
	}
}

//*/

module.exports = keyHandler;