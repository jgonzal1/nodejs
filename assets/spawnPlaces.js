const createLargeIcon = require('../style/createLargeIcon');

function spawnPlaces() {
    // const lightHouseIcon = L.icon(createLargeIcon('style/places/light_house.png'));
    // const portIcon = L.icon(createLargeIcon('style/places/port.png'));
    global.bankIcon = L.icon(createLargeIcon('style/places/bank.png'));
    global.bank2Icon = L.icon(createLargeIcon('style/places/bank2.png'));
    global.blockhousesIcon = L.icon(createLargeIcon('style/places/blockhouses.png'));
    global.castleIcon = L.icon(createLargeIcon('style/places/castle.png'));
    global.breweryIcon = L.icon(createLargeIcon('style/places/brewery.png'));
    global.cornshopIcon = L.icon(createLargeIcon('style/places/cornshop.png'));
    global.gasStationIcon = L.icon(createLargeIcon('style/places/gas_station.png'));
    global.houseIcon = L.icon(createLargeIcon('style/places/house.png'));
    global.refineryIcon = L.icon(createLargeIcon('style/places/refinery.png'));
    global.brickbuildingIcon = L.icon(createLargeIcon('style/places/brickbuilding.png'));
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
        bankIcon, // money (invest / recover after invest)
        bank2Icon, // money (take and give loans)
        blockhousesIcon,
        // → beer, fish, grain, salt, wool, spices
        // ← grain, salt (style/trading_materials/)
        castleIcon,
        // → beer, bricks, fish, gold, meat, salt, wine, wood, wool, spices
        // ← gold, wine
        breweryIcon,
        // → grain, wood
        // ← beer, wine
        cornshopIcon, // grain
        gasStationIcon, // tool/gasoline
        houseIcon,
        // → beer, fish, grain, salt, wine, wool, spices
        // ← grain, salt, wool, spices
        refineryIcon, // tool/gasoline
        brickbuildingIcon, // bricks
        signIcon,
        store2Icon, // beer, fish, grain, meat, wine, spices
        store3Icon, // beer, fish, grain, iron, meat, wine, spices
        tentIcon, // beer, fish, grain, meat, wine, spices
        tree1Icon, // wood
        tree2Icon, // wood
        tree3Icon, // wood
        tree4Icon, // wood
        treesIcon, // wood
        vendingIcon // wool, tools/compass, tools/goves, tools/map2
    ];
}

module.exports = spawnPlaces;
