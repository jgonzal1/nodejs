const math = require("mathjs");

let playerComparer, coordsDiff, distancesArray, nearestObjective, nearestPlaceIndex;
function loadPlaceModal(sites, markers) {
    playerComparer = 
        math.zeros(1, sites.length).valueOf() .concat(
        math.multiply( math.ones( 1,  sites.length ), global.player.getLatLng().lat ).valueOf() ,
        math.multiply( math.ones( 1,  sites.length ), global.player.getLatLng().lng ).valueOf() )
    ;
    coordsDiff =
        math.abs( math.subtract(
            math.transpose( math.matrix(sites) ), // [1] lat, [2] lng;
            playerComparer
        ) ).valueOf()
    ;
    distancesArray = math.add(coordsDiff[1],coordsDiff[2]);
    nearestObjective = Math.min(...distancesArray);
    nearestPlaceIndex = distancesArray.indexOf(Math.min(...distancesArray));
    document.getElementById('logs').innerText = Math.round(Math.random()*100).toString() + ' ' ;    
    if (nearestObjective < 0.0002) {
        alert(markers[nearestPlaceIndex].getPopup().getContent());
    }
}

module.exports = loadPlaceModal;