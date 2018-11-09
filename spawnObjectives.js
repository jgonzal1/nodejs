const createIcon = require('./style/createIcon');
const cercania = 40; // 100 para tests

function spawnObjectives() {
	const biscuitIcon = L.icon(createIcon('style/biscuit.png'));
	const burgerIcon = L.icon(createIcon('style/burger.png'));
	const chococookieIcon = L.icon(createIcon('style/chococookie.png'));
	const chocolateIcon = L.icon(createIcon('style/chocolate.png'));
	const cupcakeIcon = L.icon(createIcon('style/cupcake.png'));
	const donutIcon = L.icon(createIcon('style/donut.png'));
	const friesIcon = L.icon(createIcon('style/fries.png'));
	const icecreamIcon = L.icon(createIcon('style/icecream.png'));
	const pizzaIcon = L.icon(createIcon('style/pizza.png'));
	const popcornIcon = L.icon(createIcon('style/popcorn.png'));
	const potatoesIcon = L.icon(createIcon('style/potatoes.png'));
	const potiIcon = L.icon(createIcon('style/poti.png'));
	const tacoIcon = L.icon(createIcon('style/taco.png'));

	function spawnObjective(enemyIcon) {
		return L.marker(
			[lat+(Math.random()-0.5)/cercania, long+(Math.random()-0.5)/cercania],
			{icon: enemyIcon}
		).bindPopup( 
			'<color="green"><b>Objetivo</b></color>'
		);
	}

	global.biscuit	= spawnObjective(biscuitIcon);
	global.burger	= spawnObjective(burgerIcon);
	global.chococookie	= spawnObjective(chococookieIcon);
	global.chocolate	= spawnObjective(chocolateIcon);
	global.cupcake	= spawnObjective(cupcakeIcon);
	global.donut	= spawnObjective(donutIcon);
	global.fries	= spawnObjective(friesIcon);
	global.icecream	= spawnObjective(icecreamIcon);
	global.pizza	= spawnObjective(pizzaIcon);
	global.popcorn	= spawnObjective(popcornIcon);
	global.potatoes	= spawnObjective(potatoesIcon);
	global.poti	= spawnObjective(potiIcon);
	global.taco	= spawnObjective(tacoIcon);
}

module.exports = spawnObjectives;