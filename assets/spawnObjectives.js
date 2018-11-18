const createIcon = require('../style/createIcon');
const cercania = 600; // 600 para tests, 40 normal

/** @typedef L.icon @type {object} @type {L.icon} */
function spawnObjectives() {
	const backpackIcon = L.icon(createIcon('style/objectives/backpack.png'));
	const burgerIcon = L.icon(createIcon('style/objectives/burger.png'));
	const bananaIcon = L.icon(createIcon('style/objectives/banana.png'));
	const blackberryIcon = L.icon(createIcon('style/objectives/blackberry.png'));
	const bootsIcon = L.icon(createIcon('style/objectives/boots.png'));
	const chickenIcon = L.icon(createIcon('style/objectives/chicken.png'));
	const healthpotionIcon = L.icon(createIcon('style/objectives/healthpotion.png'));
	const knifeIcon = L.icon(createIcon('style/objectives/knife.png'));
	const pizzaIcon = L.icon(createIcon('style/objectives/pizza.png'));
	const riceIcon = L.icon(createIcon('style/objectives/rice.png'));
	const steelaxeIcon = L.icon(createIcon('style/objectives/steelaxe.png'));
	const swordIcon = L.icon(createIcon('style/objectives/sword.png'));
	const waterIcon = L.icon(createIcon('style/objectives/water.png'));

	/**
	 * @param {string} name 
	 * @param {L.icon} enemyIcon 
	 */
	function spawnObjective(name, enemyIcon) {
		return L.marker(
			[lat+(Math.random()-0.5)/cercania, long+(Math.random()-0.5)/cercania],
			{title: name + ' (Objetivo)', icon: enemyIcon}
		)
		//.bindPopup( '<color="green"><b>Objetivo</b></color>')
		;
	}

	global.backpack		= spawnObjective('Mochila', backpackIcon);
	global.burger		= spawnObjective('Hamburguesa', burgerIcon);
	global.banana		= spawnObjective('Plátano', bananaIcon);
	global.blackberry	= spawnObjective('Mora', blackberryIcon);
	global.boots		= spawnObjective('Zapatos', bootsIcon);
	global.chicken		= spawnObjective('Pollo frito', chickenIcon);
	global.healthpotion	= spawnObjective('Poción de salud', healthpotionIcon);
	global.knife		= spawnObjective('Cuchilo', knifeIcon);
	global.pizza		= spawnObjective('Pizza', pizzaIcon);
	global.rice			= spawnObjective('Arroz', riceIcon);
	global.steelaxe		= spawnObjective('Hacha de acero', steelaxeIcon);
	global.sword		= spawnObjective('Espada', swordIcon);
	global.water		= spawnObjective('Agua', waterIcon);
}

module.exports = spawnObjectives;