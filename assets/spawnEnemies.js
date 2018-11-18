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
			{title: name + ' (Enemigo)', icon: enemyIcon}
		)
		//.bindPopup('<color="red"><b>Enemigo</b></color>')
		;
	}

	//global.bloodyeye	= spawnEnemy('Ojo sangriento', bloodyeyeIcon);
	global.death		= spawnEnemy('Reaper', deathIcon);
	global.mummy		= spawnEnemy('Momia', mummyIcon);
	//global.owl			= spawnEnemy('Búho', owlIcon);
	global.phantom		= spawnEnemy('Fantasma', phantomIcon);
	//global.pirateskull 	= spawnEnemy('Esqueleto pirata', pirateskullIcon);
	//global.skeleton		= spawnEnemy('Esqueleto', skeletonIcon);
	global.spider		= spawnEnemy('Araña', spiderIcon);
	//global.undeadhand	= spawnEnemy('Mano cercenada', undeadhandIcon);
	global.vampire		= spawnEnemy('Murciélago', vampireIcon);
}

module.exports = spawnEnemies;