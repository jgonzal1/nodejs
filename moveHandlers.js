function fleeFromPlayer(target) {
	const latDiff = player.getLatLng().lat - target.getLatLng().lat;
	const lngDiff = player.getLatLng().lng - target.getLatLng().lng;
	let forcedDirection;
	if (Math.abs(latDiff) > Math.abs(lngDiff)) {
		if (latDiff>0) {forcedDirection='s'} else {forcedDirection='w'}
	} else {
		if (lngDiff>0) {forcedDirection='a'} else {forcedDirection='d'}
	}
	moveCharacter(target, forcedDirection);
}

function goToPlayer(target) {
	const latDiff = player.getLatLng().lat - target.getLatLng().lat;
	const lngDiff = player.getLatLng().lng - target.getLatLng().lng;
	let forcedDirection;
	if (Math.abs(latDiff) > Math.abs(lngDiff)) {
		if (latDiff>0) {forcedDirection='w'} else {forcedDirection='s'}
	} else {
		if (lngDiff>0) {forcedDirection='d'} else {forcedDirection='a'}
	}
	moveCharacter(target, forcedDirection);
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

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

module.exports.fleeFromPlayer = fleeFromPlayer;
module.exports.goToPlayer = goToPlayer;
module.exports.moveCharacter = moveCharacter;