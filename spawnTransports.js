const createIcon = require('./style/createIcon');
const cercania = 2;

function spawnTransports() {
	const balloonIcon		= L.icon(createIcon('sprites/transports/balloon.png'));
	const bikeIcon			= L.icon(createIcon('sprites/transports/bike.png'));
	const busIcon			= L.icon(createIcon('sprites/transports/bus.png'));
	//const carIcon			= L.icon(createIcon('sprites/transports/car.png'));
	//const motoIcon			= L.icon(createIcon('sprites/transports/moto.png'));
	const planeIcon			= L.icon(createIcon('sprites/transports/plane.png'));
	//const taxiIcon			= L.icon(createIcon('sprites/transports/taxi.png'));
	const trainIcon			= L.icon(createIcon('sprites/transports/train.png'));
	const truckIcon			= L.icon(createIcon('sprites/transports/truck.png'));
	/*for (let k = 0; k < length(transports); k++) {
		eval("var "+transports[k]+"Icon = L.icon(createIcon('style/"+transports[k]+".png'))");
	}*/

	function spawnTransport(transportIcon) {
		return L.marker([lat+(Math.random()-0.5)/cercania, long+(Math.random()-0.5)/cercania], {icon: transportIcon}).bindPopup(
			'<color="gray"><b>Transport</b></color>'
		);
	}

	global.balloon		= spawnTransport(balloonIcon);
	global.bike			= spawnTransport(bikeIcon);
	global.bus			= spawnTransport(busIcon);
	//global.car			= spawnTransport(carIcon);
	//global.moto			= spawnTransport(motoIcon);
	global.plane 		= spawnTransport(planeIcon);
	//global.taxi			= spawnTransport(taxiIcon);
	global.train		= spawnTransport(trainIcon);
	global.truck		= spawnTransport(truckIcon);
}

module.exports = spawnTransports;