const createIcon = require('./style/createIcon');

let bloodyeye, death, mummy, owl, phantom, pirateskull, skeleton, spider, undeadhand, vampire;

function spawnAll(L, lat, long) {
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
		return L.marker([lat+(Math.random()-0.5)/30, long+(Math.random()-0.5)/30], {icon: enemyIcon}).bindPopup(
			'<color="red"><b>Enemigo</b></color>'
		);
	}

	/*this.*/bloodyeye		= spawnEnemy(bloodyeyeIcon);
	/*this.*/death			= spawnEnemy(deathIcon);
	/*this.*/mummy			= spawnEnemy(mummyIcon);
	/*this.*/owl			= spawnEnemy(owlIcon);
	/*this.*/phantom		= spawnEnemy(phantomIcon);
	/*this.*/pirateskull 	= spawnEnemy(pirateskullIcon);
	/*this.*/skeleton		= spawnEnemy(skeletonIcon);
	/*this.*/spider			= spawnEnemy(spiderIcon);
	/*this.*/undeadhand		= spawnEnemy(undeadhandIcon);
	/*this.*/vampire		= spawnEnemy(vampireIcon);
}

module.exports.bloodyeye = bloodyeye;
module.exports.death = death;
module.exports.mummy = mummy;
module.exports.owl = owl;
module.exports.phantom = phantom;
module.exports.pirateskull = pirateskull;
module.exports.skeleton = skeleton;
module.exports.spider = spider;
module.exports.undeadhand = undeadhand;
module.exports.vampire = vampire;
module.exports.spawnAll = spawnAll;