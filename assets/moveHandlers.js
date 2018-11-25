const cL = require('../data/charactersList');
const objectiveStatsHandler = require('./objectiveStatsHandler');
const enemyStatsHandler = require('./enemyStatsHandler');
const loadEnemyBattle = require('./loadEnemyBattle');
const objectives = cL.getObjectives();

const lngCorrectionArr = [ // Corrección calculada de la distorsión angular de la longitud con respecto a su latiitud
    1.00858,    1.006355176,1.003926264,1.001293264,
    0.998456176,0.9954150,  0.992169736,0.988720384,
    0.985066944,0.981209416,0.9771478,  0.972882096,
    0.968412304,0.963738424,0.958860456,0.9537784  , // 15
    0.948492256,0.943002024,0.937307704,0.931409296,
    0.9253068,  0.919000216,0.912489544,0.905774784,
    0.898855936,0.8917330,  0.884405976,0.876874864,
    0.869139664,0.861200376,0.8530570,  0.844709536,
    0.836157984,0.827402344,0.818442616,0.8092788  , // 35
    0.799910896,0.790338904,0.780562824,0.770582656,
    0.7603984,  0.750010056,0.739417624,0.728621104,
    0.717620496,0.7064158,  0.695007016,0.683394144,
    0.671577184,0.659556136,0.6473310,  0.634901776,
    0.622268464,0.609431064,0.596389576,0.5831440  , // 55
    0.569694336,0.556040584,0.542182744,0.528120816,
    0.5138548,  0.499384696,0.484710504,0.469832224,
    0.454749856,0.4394634,  0.423972856,0.408278224,
    0.392379504,0.376276696,0.3599698,  0.343458816,
    0.326743744,0.309824584,0.292701336,0.2753740  , // 75
    0.257842576,0.240107064,0.222167464,0.204023776,
    0.1856760,  0.167124136,0.148368184,0.129408144,
    0.110244016,0.0908758,  0.071303496,0.051527104,
    0.031546624,0.011362056,0
]; // De momento tomo la de 40º porque estamos en Madrid
const nStepSounds = 2, nAttackSounds = 2;
let stepSound, attackSound;

let displayAttackPositionAlert = true;

function targetFleeFromPlayer(target, velocity, player) {
	const latDiff = player.getLatLng().lat - target.getLatLng().lat;
	const lngDiff = player.getLatLng().lng - target.getLatLng().lng;
	let forcedDirection;
	if (Math.abs(latDiff) > Math.abs(lngDiff)) {
		if (latDiff>0) {forcedDirection='s';} else {forcedDirection='w';}
	} else {
		if (lngDiff>0) {forcedDirection='a';} else {forcedDirection='d';}
	}
	moveCharacter(target, velocity, forcedDirection);
}

function targetGoToPlayer(target, velocity, player) {
	velocity = ( velocity || 1 );
	const latDiff = player.getLatLng().lat - target.getLatLng().lat;
	const lngDiff = player.getLatLng().lng - target.getLatLng().lng;
	let forcedDirection;
	if (Math.abs(latDiff) > Math.abs(lngDiff)) {
		if (latDiff>0) {forcedDirection='w';} else {forcedDirection='s';}
	} else {
		if (lngDiff>0) {forcedDirection='d';} else {forcedDirection='a';}
	}
	moveCharacter(target, velocity, forcedDirection);
}

function goToPlayer(target, velocity) {
	velocity = ( velocity || 1 );
	const latDiff = global.player.getLatLng().lat - target.getLatLng().lat;
	const lngDiff = global.player.getLatLng().lng - target.getLatLng().lng;
	let forcedDirection, btc, targetName;
	if (Math.abs(latDiff) > Math.abs(lngDiff)) {
		if (latDiff>0) {forcedDirection='w';} else {forcedDirection='s';}
	} else {
		if (lngDiff>0) {forcedDirection='d';} else {forcedDirection='a';}
	}
	moveCharacter(target, velocity, forcedDirection);
	if (0.0002 > Math.max(Math.abs(latDiff), Math.abs(lngDiff))) {
		enemyStatsHandler(target.getAttribution());
		if (
			document.getElementById('hiddenHandlerKeys').innerText === 'e' && // TODO keymap
			// L.DomUtil.get(hiddenHandlerKeys).innerHTML === 'e' && // TODO keymap
			parseFloat(document.getElementById('atk').innerHTML) > 0
		) {
			// global.layerToRemove = target.getAttribution();
			btc = parseFloat(document.getElementById('btc').innerHTML);
			btc += 1;
			document.getElementById('btc').innerHTML = btc; 
			// alert(target.getLatLng());
			target.setLatLng(L.latLng(
				target.getLatLng().lat+(Math.random()-0.5)/20,
				target.getLatLng().lng+(Math.random()-0.5)/20
			));
		}
		targetName = target.getAttribution();
		document.getElementById('currentBattle').innerText = targetName;
		loadEnemyBattle(targetName);
		document.getElementById('openModal').innerText = 'true';
		global.battleSound = new Audio("../sounds/wildpokemon.wav");
		global.battleSound.play();
		$("#battleModal").modal("show");
		$(".navbar-collapse.in").collapse("hide");
	}
}

function moveCharacter(character, velocity, forceDirection, movemap) { // 80km/h | 12x
	velocity = ( velocity || 1 );
	velLng = velocity*lngCorrectionArr[Math.round(global.lat)];
	movemap = (movemap || ['w', 'a', 's', 'd'] );
	switch (forceDirection) { //forceDirection
	case movemap[0]:
		character.setLatLng(
			L.latLng(character.getLatLng().lat+0.00001*velLng,
			character.getLatLng().lng)
		);
		break;
	case movemap[1]:
		character.setLatLng(
			L.latLng(character.getLatLng().lat,
			character.getLatLng().lng-0.00001*velocity)
		);
		break;
	case movemap[2]:
		character.setLatLng(
			L.latLng(character.getLatLng().lat-0.00001*velLng,
			character.getLatLng().lng)
		);
		break;
	case movemap[3]:
		character.setLatLng(
			L.latLng(character.getLatLng().lat,
			character.getLatLng().lng+0.00001*velocity)
		);
		break;
	}
}

function movePlayer(character, velocity, forceDirection, movemap) { // 80km/h | 12x
	character = ( character || global.player );
	velocity = ( velocity || 1 );
	velLng = velocity*lngCorrectionArr[Math.round(global.lat)];
	movemap = (movemap || ['w', 'a', 's', 'd', ' ', 'e'] );
	const direction = (forceDirection || document.getElementById('hiddenHandlerKeys').innerText);
	// L.DomUtil.get(hiddenHandlerKeys).innerHTML);
	let nearestObjetive, distancesArray, nearestObjetiveIndex, itemDescription, atk;
	switch (direction) { //forceDirection
	case movemap[0]:
	case movemap[1]:
	case movemap[2]:
	case movemap[3]:
		stepSound = new Audio("../sounds/step"+Math.ceil(nStepSounds*Math.random())+".wav");
		stepSound.play();
		moveCharacter(character, velocity, direction, movemap);
		break;
	case movemap[4]: // [ ]
		//alert('Calculando distancia...');
		distancesArray = [
			fcalcDist(global.backpack),
			fcalcDist(global.burger),
			fcalcDist(global.banana),
			fcalcDist(global.blackberry),
			fcalcDist(global.boots),
			fcalcDist(global.chicken),
			fcalcDist(global.healthpotion),
			fcalcDist(global.knife),
			fcalcDist(global.pizza),
			fcalcDist(global.rice),
			fcalcDist(global.steelaxe),
			fcalcDist(global.sword),
			fcalcDist(global.water)
		];
		nearestObjetive = Math.min( // TODO Duplicated because of async
			fcalcDist(global.backpack),
			fcalcDist(global.burger),
			fcalcDist(global.banana),
			fcalcDist(global.blackberry),
			fcalcDist(global.boots),
			fcalcDist(global.chicken),
			fcalcDist(global.healthpotion),
			fcalcDist(global.knife),
			fcalcDist(global.pizza),
			fcalcDist(global.rice),
			fcalcDist(global.steelaxe),
			fcalcDist(global.sword),
			fcalcDist(global.water)
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
		if (displayAttackPositionAlert === false) { // TODO for all player attack position disruption cases
			displayAttackPositionAlert = true;
		}
		break;
	case movemap[5]: // 'E'
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
	}
}

/** @typedef L.marker @type {object} @type {L.marker} */
/**@param {L.marker} m1 
 * @param {L.marker} m2 defaults player
 * @returns {number} a fast calculation distance number
 */
function fcalcDist(m1, m2) {
	m2 = (m2 || global.player);
	const latDiff = m1.getLatLng().lat - m2.getLatLng().lat;
	const lngDiff = m1.getLatLng().lng - m2.getLatLng().lng;
	return Math.abs(latDiff)+Math.abs(lngDiff);
}

// unused
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
			if (document.getElementById('openModal').innerText === 'false') {
				mH.movePlayer(global.player, vel, forcedDirection);
			}
			//alert(vars + "strings"); works
			if (defaultMovementLength/50000 > Math.max(latDiffAbs, lngDiffAbs)) {
				clearInterval(mouseClickDaemonizer);
				mouseMoved = false;
			}
		}, refreshRate);
	}
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

module.exports.targetFleeFromPlayer = targetFleeFromPlayer;
module.exports.targetGoToPlayer = targetGoToPlayer;
module.exports.goToPlayer = goToPlayer;
module.exports.moveCharacter = moveCharacter;
module.exports.movePlayer = movePlayer;
module.exports.onMapClick = onMapClick;