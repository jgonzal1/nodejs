const objectiveStatsHandler = require('./objectiveStatsHandler');
const cL = require('../data/charactersList');
const objectives = cL.getObjectives();
let itemDescription;
let displayAttackPositionAlert = true;

function pickOrSearchNearest() {
    //alert('Calculando distancia...');
    const distancesArray = [
        fcalcDist(global.backpack),
        fcalcDist(global.burger),
        fcalcDist(global.banana),
        fcalcDist(global.blackberry),
        fcalcDist(global.boots),
        fcalcDist(global.chicken),
        fcalcDist(global.healthpotion),
        fcalcDist(global.knife),
        fcalcDist(global.pizza),
        fcalcDist(global.rice),
        fcalcDist(global.steelaxe),
        fcalcDist(global.sword),
        fcalcDist(global.water)
    ];
    const nearestObjective = Math.min( // distancesArray
        fcalcDist(global.backpack),
        fcalcDist(global.burger),
        fcalcDist(global.banana),
        fcalcDist(global.blackberry),
        fcalcDist(global.boots),
        fcalcDist(global.chicken),
        fcalcDist(global.healthpotion),
        fcalcDist(global.knife),
        fcalcDist(global.pizza),
        fcalcDist(global.rice),
        fcalcDist(global.steelaxe),
        fcalcDist(global.sword),
        fcalcDist(global.water)//*/
    );
    const nearestObjectiveIndex = distancesArray.indexOf(Math.min(...distancesArray));
    if (nearestObjective < 0.0002) {
        itemDescription = objectiveStatsHandler(objectives[nearestObjectiveIndex]);
        alert('¡Has conseguido ' + itemDescription + ', al recoger ' + objectives[nearestObjectiveIndex] +'!');
        global.layerToRemove = objectives[nearestObjectiveIndex];
        global.points += 1;			
    } else {
        alert(
            '¡Tu objetivo más cercano aún está a ' + Math.round(5000*nearestObjective) + ' pasos y\n' +
            'es: ' + objectives[nearestObjectiveIndex] + '!'
        );
    }
    if (displayAttackPositionAlert === false) { 
        displayAttackPositionAlert = true;
    }
}

/** @typedef L.marker @type {object} @type {L.marker} */
/**@param {L.marker} m1 
 * @param {L.marker} m2 defaults player
 * @returns {number} a fast calculation distance number
 */
function fcalcDist(m1, m2) {
	m2 = (m2 || global.player);
	const latDiff = m1.getLatLng().lat - m2.getLatLng().lat;
	const lngDiff = m1.getLatLng().lng - m2.getLatLng().lng;
	return Math.abs(latDiff)+Math.abs(lngDiff);
}

module.exports = pickOrSearchNearest;