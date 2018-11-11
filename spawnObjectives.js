const createIcon = require('./style/createIcon');
const cercania = 40; // 600 para tests, 40 normal

function spawnObjectives() {
	const backpackIcon = L.icon(createIcon('style/objectives/backpack.png'));
	const burgerIcon = L.icon(createIcon('style/objectives/burger.png'));
	const bananaIcon = L.icon(createIcon('style/objectives/banana.png'));
	const blackberryIcon = L.icon(createIcon('style/objectives/blackberry.png'));
	const bootsIcon = L.icon(createIcon('style/objectives/boots.png'));
	const chickenIcon = L.icon(createIcon('style/objectives/chicken.png'));
	const greenflaskIcon = L.icon(createIcon('style/objectives/greenflask.png'));
	const knifeIcon = L.icon(createIcon('style/objectives/knife.png'));
	const pizzaIcon = L.icon(createIcon('style/objectives/pizza.png'));
	const riceIcon = L.icon(createIcon('style/objectives/rice.png'));
	const steelaxeIcon = L.icon(createIcon('style/objectives/steelaxe.png'));
	const swordIcon = L.icon(createIcon('style/objectives/sword.png'));
	const waterIcon = L.icon(createIcon('style/objectives/water.png'));

	function spawnObjective(enemyIcon) {
		return L.marker(
			[lat+(Math.random()-0.5)/cercania, long+(Math.random()-0.5)/cercania],
			{icon: enemyIcon}
		).bindPopup( 
			'<color="green"><b>Objetivo</b></color>'
		);
	}

	global.backpack	= spawnObjective(backpackIcon);
	global.burger	= spawnObjective(burgerIcon);
	global.banana	= spawnObjective(bananaIcon);
	global.blackberry	= spawnObjective(blackberryIcon);
	global.boots	= spawnObjective(bootsIcon);
	global.chicken	= spawnObjective(chickenIcon);
	global.greenflask	= spawnObjective(greenflaskIcon);
	global.knife	= spawnObjective(knifeIcon);
	global.pizza	= spawnObjective(pizzaIcon);
	global.rice	= spawnObjective(riceIcon);
	global.steelaxe	= spawnObjective(steelaxeIcon);
	global.sword	= spawnObjective(swordIcon);
	global.water	= spawnObjective(waterIcon);
}

module.exports = spawnObjectives;