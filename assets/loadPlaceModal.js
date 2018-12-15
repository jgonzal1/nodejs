const math = require("mathjs");

let playerComparer, coordsDiff, distancesArray, nearestObjective, nearestPlaceIndex;
function loadPlaceModal(sites, markers) {
   // document.getElementById('logs').innerText += sites.length;
   alert("entro"); // TODO
    playerComparer = 
        math.multiply( math.ones( 1,  sites.length ), global.player.latLng[0] ).valueOf() .concat(
        math.multiply( math.ones( 1,  sites.length ), global.player.latLng[1] ).valueOf() )
    ;
    coordsDiff =
        math.abs( math.substract(
            math.transpose( math.matrix(sites) ),
            playerComparer
        ) ).valueOf()
    ;
    distancesArray = math.add(coordsDiff[0],coordsDiff[1]).valueOf();
    nearestObjective = Math.min(distancesArray);
    nearestPlaceIndex = distancesArray.indexOf(Math.min(...distancesArray));
    
    alert(markers[nearestPlaceIndex].getContent());
    if (nearestObjective < 0.0002) {
        // throw objectiveNearPlayer;
        return '¡Estás cerca de algo!';
    }
}

module.exports = loadPlaceModal;