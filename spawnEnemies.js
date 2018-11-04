const createIcon = require('./style/createIcon');

function spawnAll() {
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
	/*for (let k = 0; k < length(transports); k++) {
		eval("var "+transports[k]+"Icon = L.icon(createIcon('style/"+transports[k]+".png'))");
	}*/

	function spawnEnemy(enemyIcon) {
		return L.marker([lat+(Math.random()-0.5)/30, long+(Math.random()-0.5)/30], {icon: enemyIcon}).bindPopup(
			'<color="red"><b>Enemigo</b></color>'
		);
	}

	global.bloodyeye	= spawnEnemy(bloodyeyeIcon);
	global.death		= spawnEnemy(deathIcon);
	global.mummy		= spawnEnemy(mummyIcon);
	global.owl			= spawnEnemy(owlIcon);
	global.phantom		= spawnEnemy(phantomIcon);
	global.pirateskull 	= spawnEnemy(pirateskullIcon);
	global.skeleton		= spawnEnemy(skeletonIcon);
	global.spider		= spawnEnemy(spiderIcon);
	global.undeadhand	= spawnEnemy(undeadhandIcon);
	global.vampire		= spawnEnemy(vampireIcon);
}

module.exports = spawnAll;