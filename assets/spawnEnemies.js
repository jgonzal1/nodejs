const createIcon = require('../style/createIcon');
const cercania = 70;

/** @typedef L.icon @type {object} @type {L.icon} */
function spawnEnemies() {
	const bloodyeyeIcon		= L.icon(createIcon('sprites/enemies/bloodyeye.png'));
	const deathIcon			= L.icon(createIcon('sprites/enemies/death.png'));
	const mummyIcon			= L.icon(createIcon('sprites/enemies/mummy.png'));
	const owlIcon			= L.icon(createIcon('sprites/enemies/owl.png'));
	const phantomIcon		= L.icon(createIcon('sprites/enemies/phantom.png'));
	const pirateskullIcon	= L.icon(createIcon('sprites/enemies/pirateskull.png'));
	const skeletonIcon		= L.icon(createIcon('sprites/enemies/skeleton.png'));
	const spiderIcon		= L.icon(createIcon('sprites/enemies/spider.png'));
	const undeadhandIcon	= L.icon(createIcon('sprites/enemies/undeadhand.png'));
	const vampireIcon		= L.icon(createIcon('sprites/enemies/vampire.png'));

	/**
	 * @param {string} name 
	 * @param {L.icon} enemyIcon 
	 */
	function spawnEnemy(name, enemyIcon) {
		do {
			latRnd = (Math.random()-0.5)/cercania;
		} while (Math.abs(latRnd) < 0.0004);
		do {
			longRnd = (Math.random()-0.5)/cercania;
		} while (Math.abs(longRnd) < 0.0004);

		return L.marker(
			[lat+latRnd, long+longRnd],
			{title: name + ' (Enemigo)', attribution: name, icon: enemyIcon}
		)
		//.bindPopup('<color="red"><b>Enemigo</b></color>')
		;
	}

	//global.bloodyeye	= spawnEnemy('bloodyeye', bloodyeyeIcon); // 'Ojo sangriento'
	global.death		= spawnEnemy('death', deathIcon); // 'Reaper'
	global.mummy		= spawnEnemy('mummy', mummyIcon); // 'Momia'
	//global.owl		= spawnEnemy('owl', owlIcon); // 'Búho'
	global.phantom		= spawnEnemy('phantom', phantomIcon); // 'Fantasma'
	//global.pirateskull= spawnEnemy('pirateskull', pirateskullIcon); // 'Esqueleto pirata'
	//global.skeleton	= spawnEnemy('skeleton', skeletonIcon); // 'Esqueleto'
	global.spider		= spawnEnemy('spider', spider); // 'Araña'
	//global.undeadhand	= spawnEnemy('undeadhand', undeadhandIcon); // 'Mano cercenada'
	global.vampire		= spawnEnemy('vampire', vampireIcon); // 'Murciélago'
}

module.exports = spawnEnemies;