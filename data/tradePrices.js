var tradePrices = {
    'beerDelux': [200, 400],
    'beerNorml': [100, 500],
    'beerCheap': [100, 200],
    'bricksDelux': [100, 50],
    'bricksNorml': [75, 75],
    'bricksCheap': [50, 100],
    'fishDelux': [600, 3900],
    'fishNorml': [575, 3625],
    'fishCheap': [550, 3450],
    'goldDelux': [3990000, 110000],
    'goldNorml': [3900000, 200000],
    'goldCheap': [3900000, 100000],
    'grainDelux': [40, 200],
    'grainNorml': [38, 162],
    'grainCheap': [35, 145],
    'ironDelux': [50, 110],
    'ironNorml': [40, 110],
    'ironCheap': [40, 100],
    'meatDelux': [600, 3000],
    'meatNorml': [580, 2720],
    'meatCheap': [550, 2450],
    'saltDelux': [20, 300],
    'saltNorml': [18, 282],
    'saltCheap': [18, 232],
     // Volumen: 50g (20v menos) ↓
    'spicesDelux': [350, 650],
    'spicesNorml': [300, 500],
    'spicesCheap': [300, 300],
    'wineDelux': [1000, 9000],
    'wineNorml': [500, 7000],
    'wineCheap': [100, 4900],
    'woodDelux': [750, 1750],
    'woodNorml': [500, 1500],
    'woodCheap': [500, 1250],
    'woolDelux': [1000, 9000],
    'woolNorml': [800, 8200],
    'woolCheap': [750, 7250]
};

function getTradePrices() {
    return tradePrices;
}

module.exports = getTradePrices;