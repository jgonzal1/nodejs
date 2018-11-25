function createLargeIcon(path) {
    return {
        iconUrl: path,
        shadowUrl: '/style/shadow.png',
        iconSize: [48, 48],
        shadowSize: [48, 48], // size of the shadow
        iconAnchor: [23, 48],
        shadowAnchor: [4, 52],  // the same for the shadow
        popupAnchor: [10, -35]
    };
}

module.exports = createLargeIcon;