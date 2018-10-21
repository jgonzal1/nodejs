function createIcon(path) {
    return {
        iconUrl: path,
        iconSize: [39, 39],
        iconAnchor: [18, 39],
        popupAnchor: [10, -35]
    };
}

function createCircle(L, lat, long, map) {
    L.circle([lat, long], {radius: 200, color: "black"}).addTo(map);
}

module.exports = createIcon;