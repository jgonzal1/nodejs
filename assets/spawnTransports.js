const createIcon = require('../style/createIcon');
const cercania = 5; // 20 online

function spawnTransports() {
    const balloonIcon   = L.icon(createIcon('sprites/map-transports/balloon.png',50));
    const bikeIcon      = L.icon(createIcon('sprites/map-transports/bike.png'));
    const busIcon       = L.icon(createIcon('sprites/map-transports/bus.png'));
    const schoolbusIcon = L.icon(createIcon('sprites/map-transports/schoolbus.png'));
    const taxiIcon      = L.icon(createIcon('sprites/map-transports/taxi.png'));
    const trainIcon     = L.icon(createIcon('sprites/map-transports/train.png'));
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

    global.balloon   = spawnTransport(balloonIcon);
    global.bike      = spawnTransport(bikeIcon);
    global.bus       = spawnTransport(busIcon);
    global.schoolbus = spawnTransport(schoolbusIcon);
    global.taxi      = spawnTransport(taxiIcon);
    global.train     = spawnTransport(trainIcon);
}

module.exports = spawnTransports;