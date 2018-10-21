const createIcon = require('./style/createIcon');

var bloodyeye;
var death;
var mummy;
var owl;
var phantom;
var pirateskull;
var skeleton;
var spider;
var undeadhand;
var vampire;

function createCharactersAndPlaces(L, startingLat, startingLng) {
	const playerIcon		= L.icon(createIcon('style/ratkid-shaded.png'));
	const bloodyeyeIcon	= L.icon(createIcon('sprites/enemies/bloodyeye.png'));
	const deathIcon		= L.icon(createIcon('sprites/enemies/death.png'));
	const mummyIcon		= L.icon(createIcon('sprites/enemies/mummy.png'));
	const owlIcon			= L.icon(createIcon('sprites/enemies/owl.png'));
	const phantomIcon		= L.icon(createIcon('sprites/enemies/phantom.png'));
	const pirateskullIcon	= L.icon(createIcon('sprites/enemies/pirateskull.png'));
	const skeletonIcon	= L.icon(createIcon('sprites/enemies/skeleton.png'));
	const spiderIcon		= L.icon(createIcon('sprites/enemies/spider.png'));
	const undeadhandIcon	= L.icon(createIcon('sprites/enemies/undeadhand.png'));
	const vampireIcon		= L.icon(createIcon('sprites/enemies/vampire.png'));
	const player 		= L.marker([startingLat, startingLng], {icon: playerIcon}).bindPopup(
		'<b>Tú (Ratkids rookie, lvl. 1)</b>'
	);
	function spawnEnemy(enemyIcon) {
		return L.marker([startingLat+(Math.random()-0.5)/30, startingLng+(Math.random()-0.5)/30], {icon: enemyIcon}).bindPopup(
			'<color="red"><b>Enemigo</b></color>'
		);
	}
	bloodyeye	= spawnEnemy(bloodyeyeIcon);
	death		= spawnEnemy(deathIcon);
	mummy		= spawnEnemy(mummyIcon);
	owl			= spawnEnemy(owlIcon);
	phantom		= spawnEnemy(phantomIcon);
	pirateskull = spawnEnemy(pirateskullIcon);
	skeleton	= spawnEnemy(skeletonIcon);
	spider		= spawnEnemy(spiderIcon);
	undeadhand	= spawnEnemy(undeadhandIcon);
	vampire		= spawnEnemy(vampireIcon);

	//TODO iterative markers creation
	/*const markers = [];
	markers.push(player);
	for(const i in sites) {
		markers.push(
			L.marker(
				[
					sites[i][1],
					sites[i][2]
				],
				{icon: pinkIcon}
			).bindPopup(
				'<b>' + sites[i][0] + '</b>'
			)
		)
	}
	;*/
	return L.layerGroup([
		//TODO add markers to layergoup simply as (markers)
		player,
		bloodyeye, death, mummy, owl, phantom, pirateskull, skeleton, spider, undeadhand, vampire
	]);
}

module.exports.createCharactersAndPlaces = createCharactersAndPlaces;
module.exports.player = player;