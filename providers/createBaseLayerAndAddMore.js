const getPwds = require('../dev.private.js');
const pwd = getPwds();
function createBaseLayerAndAddMore(baseMap, L) {
    const hellMap = L.tileLayer(
        'https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey='+pwd['thunderforestKey'],
        { minZoom: 2, maxZoom: 19 }
    );
    const osmMap = L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { minZoom: 2, maxZoom: 19 }
    );
    const satelliteMap = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        { minZoom: 2, maxZoom: 19 }
    );
    return {
        "Mapa juego": baseMap,
        "Mapa nocturno": hellMap,	
        "Mapa descriptivo": osmMap,
        "Mapa satélite": satelliteMap,
    };
}

module.exports = createBaseLayerAndAddMore;