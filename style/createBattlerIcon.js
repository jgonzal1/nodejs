function createBattlerIcon(path) {
    return {
        iconUrl: path,
        shadowUrl: '/style/battle.png',
        iconSize: [48, 48],
        shadowSize: [16, 16], // 32, 36 // size of the shadow
        iconAnchor: [23, 48],
        shadowAnchor: [-16, 52],  // the same for the shadow
        popupAnchor: [10, -35]
    };
}

module.exports = createBattlerIcon;