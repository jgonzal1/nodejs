var sites = [
    ["Casa Julio", 40.42, -3.7],
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
    ["UNIDE Market", 40.5, -3.7],
    ["UNIDE Market", 40.49, -3.71],
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

// initialCoords = [ 6.509594 ,  3.37033 , 15] // PLAYER @ Laos, Nigeria
// initialCoords = [47.70     , 14.74    , 8 ] // AUSTRIA
// initialCoords = [48.303360 , 14.30187 , 17] // PLAYER @ Linz, Oberösterreich
// initialCoords = [40.4942011, -3.71013 , 15] // MADRID

function getSites() {
    return sites;
}

module.exports = getSites;