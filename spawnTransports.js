const createIcon = require('./style/createIcon');
const cercania = 2;

function spawnTransports() {
	const balloonIcon		= L.icon(createIcon('sprites/transports/balloon.png'));
	const bikeIcon			= L.icon(createIcon('sprites/transports/bike.png'));
	const busIcon			= L.icon(createIcon('sprites/transports/bus.png'));
	const furgoIcon			= L.icon(createIcon('sprites/transports/furgo.png'));
	const planeIcon			= L.icon(createIcon('sprites/transports/plane.png'));
	const trainIcon			= L.icon(createIcon('sprites/transports/train.png'));
	/*for (let k = 0; k < length(transports); k++) {
		eval("var "+transports[k]+"Icon = L.icon(createIcon('style/"+transports[k]+".png'))");
	}*/

	function spawnTransport(transportIcon) {
		return L.marker(
			[lat+(Math.random()-0.5)/cercania, long+(Math.random()-0.5)/cercania],
			{icon: transportIcon}
		).bindPopup(
			'<color="gray"><b>Transport</b></color>'
		);
	}

	global.balloon		= spawnTransport(balloonIcon);
	global.bike			= spawnTransport(bikeIcon);
	global.bus			= spawnTransport(busIcon);
	global.furgo		= spawnTransport(furgoIcon);
	global.plane 		= spawnTransport(planeIcon);
	global.train		= spawnTransport(trainIcon);
}

module.exports = spawnTransports;