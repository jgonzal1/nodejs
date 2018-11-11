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

	global.backpack		= spawnObjective(backpackIcon); // 4L / allows items storage (8L)
	global.burger		= spawnObjective(burgerIcon); // 600ml / restores 8 HP / hs hunger
	global.banana		= spawnObjective(bananaIcon); // 200ml / restores 2 HP / hs hunger
	global.blackberry	= spawnObjective(blackberryIcon); // 400ml / restores 4 HP / hs hunger
	global.boots		= spawnObjective(bootsIcon); // 800ml 2nd pair / velocity multiplier x 1.5
	global.chicken		= spawnObjective(chickenIcon); // 500ml / restores 5 HP / hs hunger
	global.greenflask	= spawnObjective(greenflaskIcon); // 500ml / restores 10 HP / hs thirst
	global.knife		= spawnObjective(knifeIcon); // 200ml / + 4 atk 
	global.pizza		= spawnObjective(pizzaIcon); // 800ml / restores 10 HP / hs thirst
	global.rice			= spawnObjective(riceIcon); // 300ml / restores 3 HP / hs thirst
	global.steelaxe		= spawnObjective(steelaxeIcon); // 1L / + 6 atk
	global.sword		= spawnObjective(swordIcon); // occupied hand / +10 atk
	global.water		= spawnObjective(waterIcon); // 1L / restores 2 HP / 12 hs thirst
}

module.exports = spawnObjectives;