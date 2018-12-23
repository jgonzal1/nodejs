const createIcon = require('../style/createIcon');
const cercania = 40;

/** @typedef L.icon @type {object} @type {L.icon} */
function spawnMissionPeople() {
	const traderIcon = L.icon(createIcon(''));

	/**
	 * @param {string} name 
	 * @param {L.icon} traderIcon 
	 */
	function spawnObjective(name, traderIcon) {
		return L.marker(
			[lat+(Math.random()-0.5)/cercania, long+(Math.random()-0.5)/cercania],
			{title: name + ' (Mission assigner)', icon: traderIcon}
		)
		//.bindPopup( '<color="green"><b>Trader</b></color>')
		;
	}

	global.trader = spawnObjective('Mission assigner', traderIcon);
}

module.exports = spawnMissionPeople;