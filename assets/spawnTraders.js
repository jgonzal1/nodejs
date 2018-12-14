const createIcon = require('../style/createIcon');
const cercania = 40;

/** @typedef L.icon @type {object} @type {L.icon} */
function spawnTraders() {
	const traderIcon = L.icon(createIcon(''));

	/**
	 * @param {string} name 
	 * @param {L.icon} traderIcon 
	 */
	function spawnObjective(name, traderIcon) {
		return L.marker(
			[lat+(Math.random()-0.5)/cercania, long+(Math.random()-0.5)/cercania],
			{title: name + ' (Trader)', icon: traderIcon}
		)
		//.bindPopup( '<color="green"><b>Trader</b></color>')
		;
	}

	global.trader = spawnObjective('Trader', traderIcon);
}

module.exports = spawnTraders;