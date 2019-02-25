const itemStorageHandler = require('./itemStorageHandler');
const objectiveStatsHandler = require('./objectiveStatsHandler');
const cL = require('../data/charactersList');
const objectives = cL.getObjectives();
let itemDescription;
let displayAttackPositionAlert = true;

function pickOrSearchNearest() {
    // alert('Calculando distancia...');
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
    if (nearestObjective < 0.0004) {
        const currentCoords = (Math.round(global.player.getLatLng().lat*10000)/10000).toString() + (Math.round(global.player.getLatLng().lng*10000)/10000).toString();
        if (document.getElementById('currentCoords').innerHTML === currentCoords) {
            document.getElementById('hiddenHandlerKeys').innerText = keypressMap["pause"][0];
            // alert("mismo item");
        } else {
            document.getElementById('currentCoords').innerHTML = currentCoords;
            if (
                document.getElementById('availableRoom').innerHTML == "true" &&
                objectives[nearestObjectiveIndex] != "backpack"
            ) {
                // alert(document.getElementById('room').innerHTML+" "+document.getElementById('availableRoom').innerHTML);
                itemStorageHandler(objectives[nearestObjectiveIndex]);
                // ToDo volume
                if (
                    document.getElementById('storageMethod').innerHTML == "Bare hands" ||
                    parseFloat(document.getElementById('room').innerHTML) >= 7
                ) {
                    document.getElementById('availableRoom').innerHTML = "false";
                }
            } else {
                itemDescription = objectiveStatsHandler(objectives[nearestObjectiveIndex]);
                alert('¡Has conseguido ' + itemDescription + ', al recoger ' + objectives[nearestObjectiveIndex] +'!');
            }
            global.layerToRemove = objectives[nearestObjectiveIndex];
            global.points += 1;
            // alert("item diferente");
        }
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