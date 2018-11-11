const createIcon = require('./style/createIcon');
const cercania = 70;

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

	function spawnEnemy(enemyIcon) {
		do {
			latRnd = (Math.random()-0.5)/cercania;
		} while (Math.abs(latRnd) < 0.0004);
		do {
			longRnd = (Math.random()-0.5)/cercania;
		} while (Math.abs(longRnd) < 0.0004);

		return L.marker(
			[lat+latRnd, long+longRnd],
			{icon: enemyIcon}
		).bindPopup(
			'<color="red"><b>Enemigo</b></color>'
		);
	}

	//global.bloodyeye	= spawnEnemy(bloodyeyeIcon);
	global.death		= spawnEnemy(deathIcon);
	global.mummy		= spawnEnemy(mummyIcon);
	//global.owl			= spawnEnemy(owlIcon);
	global.phantom		= spawnEnemy(phantomIcon);
	//global.pirateskull 	= spawnEnemy(pirateskullIcon);
	//global.skeleton		= spawnEnemy(skeletonIcon);
	global.spider		= spawnEnemy(spiderIcon);
	//global.undeadhand	= spawnEnemy(undeadhandIcon);
	global.vampire		= spawnEnemy(vampireIcon);
}

module.exports = spawnEnemies;