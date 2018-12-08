const createLargeIcon = require('../style/createLargeIcon');

function spawnPlaces() {
    // const lightHouseIcon = L.icon(createLargeIcon('style/places/light_house.png'));
    // const portIcon = L.icon(createLargeIcon('style/places/port.png'));
    global.bankIcon = L.icon(createLargeIcon('style/places/bank.png'));
    global.blockhousesIcon = L.icon(createLargeIcon('style/places/blockhouses.png'));
    global.castleIcon = L.icon(createLargeIcon('style/places/castle.png'));
    global.chemistryIcon = L.icon(createLargeIcon('style/places/chemistry.png'));
    global.cornshopIcon = L.icon(createLargeIcon('style/places/cornshop.png'));
    global.gasStationIcon = L.icon(createLargeIcon('style/places/gas_station.png'));
    global.houseIcon = L.icon(createLargeIcon('style/places/house.png'));
    global.signIcon = L.icon(createLargeIcon('style/places/sign.png'));
    global.store2Icon = L.icon(createLargeIcon('style/places/store2.png'));
    global.store3Icon = L.icon(createLargeIcon('style/places/store3.png'));
    global.tentIcon = L.icon(createLargeIcon('style/places/tent.png'));
    global.tree1Icon = L.icon(createLargeIcon('style/places/tree1.png'));
    global.tree2Icon = L.icon(createLargeIcon('style/places/tree2.png'));
    global.tree3Icon = L.icon(createLargeIcon('style/places/tree3.png'));
    global.tree4Icon = L.icon(createLargeIcon('style/places/tree4.png'));
    global.treesIcon = L.icon(createLargeIcon('style/places/trees.png'));
    global.vendingIcon = L.icon(createLargeIcon('style/places/vending.png'));
    
    global.placeIconsArray = [
        //lightHouseIcon,
        //portIcon,
        bankIcon,
        blockhousesIcon,
        castleIcon,
        chemistryIcon,
        cornshopIcon,
        gasStationIcon,
        houseIcon,
        signIcon,
        store2Icon,
        store3Icon,
        tentIcon,
        tree1Icon,
        tree2Icon,
        tree3Icon,
        tree4Icon,
        treesIcon,
        vendingIcon
    ];
}

module.exports = spawnPlaces;
