const createLargeIcon = require('../style/createLargeIcon');
const cercania = 10;

/** @typedef L.icon @type {object} @type {L.icon} */
function spawnMissionPeople() {
    const bartIcon = L.icon(createLargeIcon('sprites/map-player/bart.png'));
    const lisaIcon = L.icon(createLargeIcon('sprites/map-player/lisa.png'));
    const mickeymouseIcon = L.icon(createLargeIcon('sprites/map-player/mickeymouse.png'));
    const pedobearIcon = L.icon(createLargeIcon('sprites/map-player/pedobear.png'));
    const toadIcon = L.icon(createLargeIcon('sprites/map-player/toad.png'));
    const tomIcon = L.icon(createLargeIcon('sprites/map-player/tom.png'));
    const ashketchumIcon = L.icon(createLargeIcon('sprites/map-player/ashketchum.png'));
    const foxIcon = L.icon(createLargeIcon('sprites/map-player/fox.png'));
    const marioIcon = L.icon(createLargeIcon('sprites/map-player/mario.png'));
    const narutoIcon = L.icon(createLargeIcon('sprites/map-player/naruto.png'));
    const pikachuIcon = L.icon(createLargeIcon('sprites/map-player/pikachu.png'));
    const toadetteIcon = L.icon(createLargeIcon('sprites/map-player/toadette.png'));

	/**
	 * @param {string} name 
	 * @param {L.icon} personIcon 
	 */
	function spawnObjective(name, personIcon) {
		return L.marker(
			[lat+(Math.random()-0.5)/cercania, long+(Math.random()-0.5)/cercania],
			{title: name + ' (Mission assigner)', icon: personIcon}
		)
		//.bindPopup( '<color="green"><b>Person</b></color>')
		;
	}

	global.bart = spawnObjective('Person', bartIcon);
    global.lisa = spawnObjective('Person', lisaIcon);
    global.mickeymouse = spawnObjective('Person', mickeymouseIcon);
    global.pedobear = spawnObjective('Person', pedobearIcon);
    global.toad = spawnObjective('Person', toadIcon);
    global.tom = spawnObjective('Person', tomIcon);
    global.ashketchum = spawnObjective('Person', ashketchumIcon);
    global.fox = spawnObjective('Person', foxIcon);
    global.mario = spawnObjective('Person', marioIcon);
    global.naruto = spawnObjective('Person', narutoIcon);
    global.pikachu = spawnObjective('Person', pikachuIcon);
    global.toadette = spawnObjective('Person', toadetteIcon);
}

module.exports = spawnMissionPeople;