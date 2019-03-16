const lngCorrector = require('./lngCorrector');
const lngCorrectionArr = lngCorrector();

var austrianCapitals = [
    [46.623997, 14.307812, 'pinkIcon', '<b>Klagenfurt, Kärnten</b>'],
    [47.070762, 15.438698, 'pinkIcon', '<b>Graz, Steiermark</b>'],
    [47.805109, 13.041151, 'pinkIcon', '<b>Salzburg, Salzburg</b>'],
    [47.845993, 16.527337, 'greenIcon', '<b>Eisenstadt, Burgenland</b>'],
    [48.208539, 16.372505, 'greenIcon', '<b>Wien, Wien</b>'],
    [48.203828, 15.630877, 'greenIcon', '<b>St. Pölten, Niederösterreich</b>'],
    [48.307025, 14.284829, 'blueIcon', '<b>Linz, Oberösterreich</b>'],
    [47.268896, 11.401791, 'blueIcon', '<b>Innsbruck, Tirol</b>'],
    [47.500929,  9.740660, 'blueIcon', '<b>Bregenz, Vorarlberg</b>']
];

var initialCoords = {
    "Austria.Oberösterreich.Linz":      [48.303360 , 14.30187 , 17],
    "Austria.SanktGallen.Altenmarkt":   [47.70     , 14.74    ,  8],
    "EEUU.NewYork.Manhattan":           [40.702222 ,-73.979378, 10],
    "España.Almería.Pescadería":        [36.836223 , -2.466880, 15],
    "España.Madrid.Mirasierra":         [40.4942011, -3.71013 , 16], // places 40.485, -3.69
    "Mirasierra.Biased.Offline":        [ 0.17     ,  0.08    , 14],
    "Mirasierra.Offline":               [ 0.1      ,  0.1     , 14],
    "GoT":                              [ 0.06     ,  0.06    , 16],
    "Nigeria.Laos":                     [ 6.509594 ,  3.37033 , 15],
    "Noruega.Svalbard.Longyearbyen":    [78.223331 , 15.646849, 16]
};

var madridSites = [
    ["Bar", 40.42, -3.7],
    ["Correos", 40.51, -3.7],
    ["Discoteca Azúcar", 40.41, -3.7],
    ["Generación X Fermín Caballero", 40.48, -3.71],
    ["IECISA", 40.5, -3.7],
    ["La Panza de Sancho", 40.48, -3.72],
    ["Parque de El Retiro", 40.42, -3.68],
    ["Peluquería Sangenjo", 40.48, -3.7],
    ["Rita Sibarita", 40.5, -3.71],
    ["Taberna La Felipa", 40.51, -3.69],
    ["Tropical House", 40.42, -3.71],
    ["Market", 40.5, -3.7],
    ["Market", 40.49, -3.71],
    ["WiZink Center", 40.42, -3.67],
    ["Bar Hawaiano Mauna Loa", 40.41, -3.7],
    ["Faborit Cuzco", 40.46, -3.69],
    ["El Rey Lagarto", 40.43, -3.7],
    ["Restaurante Xiaoman", 40.42, -3.71],
    ["Casa", 40.4942011, -3.7101309],
    ["Trabajo", 40.4961939, -3.7000401],
    ["Recoletos Jazz", 40.42288339, -3.69029919],
    ["Salsa Martes", 40.4195894, -3.7079193],
    ["Piso", 40.4320636, -3.6547007],
    ["Orilla del Manzanares", 40.4547697, -3.7466842]
];

var places = [
    "bank",
    "bank2",
    "blockhouses",
    "castle",
    "brewery",
    "cornshop",
    "gas_station",
    "house",
    "refinery",
    "brickbuilding",
    "sign",
    "store2",
    "store3",
    "tent",
    "tree1",
    "tree2",
    "tree3",
    "tree4",
    "trees",
    "vending"
    //"light_house",
    //"port",
];
var nPlaces = places.length;

function getAustrianCapitals() {
    return austrianCapitals;
}
function getInitialCoords() {
    return initialCoords;
}
function getPlaces() {
    return places;
}

const sites = [], closeness = 30; //7
function getSites(coords) {
    for (let k = 0; k < 100; k++) {
        sites.push([
            '', // places[Math.floor(Math.random()*nPlaces)],
            coords[0]+(Math.random()-0.5)*lngCorrectionArr[40]/closeness,
            coords[1]+(Math.random()-0.5)/closeness
        ]);
        if (k == 99) {
            return sites;
        }
    }
}

module.exports.getAustrianCapitals  = getAustrianCapitals;
module.exports.getInitialCoords     = getInitialCoords;
module.exports.getPlaces            = getPlaces;
module.exports.getSites             = getSites;