function createIcon(path, size) {
    size = (size || 39);
    return {
        iconUrl: path,
        iconSize: [size, size],
        iconAnchor: [18, 39],
        popupAnchor: [10, -35]
    };
}

function createCircle(L, lat, long, map) {
    L.circle([lat, long], {radius: 200, color: "black"}).addTo(map);
}

module.exports = createIcon;