const enemyStatsHandler = require('./enemyStatsHandler');
const healthHandler = require('./healthHandler');
const checkPlayerDeath = require('./checkPlayerDeath');
const loadEnemyBattle = require('./loadEnemyBattle');
const lngCorrector = require('../data/lngCorrector');
const lngCorrectionArr = lngCorrector();

function targetFleeFromPlayer(target, velocity, player) {
    const latDiff = player.getLatLng().lat - target.getLatLng().lat;
    const lngDiff = player.getLatLng().lng - target.getLatLng().lng;
    let forcedDirection;
    if (Math.abs(latDiff) > Math.abs(lngDiff)) {
        if (latDiff>0) {forcedDirection='s';} else {forcedDirection='w';}
    } else {
        if (lngDiff>0) {forcedDirection='a';} else {forcedDirection='d';}
    }
    moveCharacter(target, velocity, forcedDirection);
}

function targetGoToPlayer(target, velocity, player) {
    velocity = ( velocity || 2 );
    const latDiff = player.getLatLng().lat - target.getLatLng().lat;
    const lngDiff = player.getLatLng().lng - target.getLatLng().lng;
    let forcedDirection;
    if (Math.abs(latDiff) > Math.abs(lngDiff)) {
        if (latDiff>0) {forcedDirection='w';} else {forcedDirection='s';}
    } else {
        if (lngDiff>0) {forcedDirection='d';} else {forcedDirection='a';}
    }
    moveCharacter(target, velocity, forcedDirection);
}

function goToPlayer(target, velocity) {
    velocity = ( velocity || 2 );
    const latDiff = global.player.getLatLng().lat - target.getLatLng().lat;
    const lngDiff = global.player.getLatLng().lng - target.getLatLng().lng;
    let forcedDirection, btc, targetName, health;
    if (Math.abs(latDiff) > Math.abs(lngDiff)) {
        if (latDiff>0) {forcedDirection='w';} else {forcedDirection='s';}
    } else {
        if (lngDiff>0) {forcedDirection='d';} else {forcedDirection='a';}
    }
    moveCharacter(target, velocity, forcedDirection);
    if (0.0002 > Math.max(Math.abs(latDiff), Math.abs(lngDiff))) {
        enemyStatsHandler(
            target.getAttribution(), function(health) {
                healthHandler(health);
                checkPlayerDeath(health);
            }
        );
        if (
            ( document.getElementById('hiddenHandlerKeys').innerText === global.keymap["wield"][0] ||
            document.getElementById('hiddenHandlerKeys').innerText === global.keymap["wield"][1] ) &&
            parseFloat(document.getElementById('atk').innerHTML) > 1
        ) {
            // global.layerToRemove = target.getAttribution();
            btc = parseFloat(document.getElementById('btc').innerHTML);
            btc += 1;
            document.getElementById('btc').innerHTML = btc; 
            // alert(target.getLatLng());
            target.setLatLng(L.latLng(
                target.getLatLng().lat+(Math.random()-0.5)/20,
                target.getLatLng().lng+(Math.random()-0.5)/20
            ));
        } else {
            targetName = target.getAttribution();
            document.getElementById('currentEnemyBattler').innerText = targetName;
            loadEnemyBattle(targetName);
            document.getElementById('openModal').innerText = 'true';
            global.battleSound = new Audio("../sounds/battlers/"+targetName+"1.wav");
            global.battleSound.play();
            $("#battleModal").modal("show");
            $(".navbar-collapse.in").collapse("hide");            
        }
        target.setLatLng(L.latLng(
            target.getLatLng().lat+(Math.random()-0.5)/20,
            target.getLatLng().lng+(Math.random()-0.5)/20
        ));
    }
}

function moveCharacter(character, velocity, forceDirection) { // 80km/h | 12x
    velocity = ( velocity || 2 );
    velLng = velocity*lngCorrectionArr[Math.round(global.lat)];
    switch (forceDirection) { //forceDirection
    case global.keymap["moveNorth"][0]:
    case global.keymap["moveNorth"][1]:
    case global.keymap["moveNorth"][2]:
        character.setLatLng(
            L.latLng(character.getLatLng().lat+0.00001*velLng,
            character.getLatLng().lng)
        );
        break;
    case global.keymap["moveWest"][0]:
    case global.keymap["moveWest"][1]:
    case global.keymap["moveWest"][2]:
        character.setLatLng(
            L.latLng(character.getLatLng().lat,
            character.getLatLng().lng-0.00001*velocity)
        );
        break;
    case global.keymap["moveSouth"][0]:
    case global.keymap["moveSouth"][1]:
    case global.keymap["moveSouth"][2]:
        character.setLatLng(
            L.latLng(character.getLatLng().lat-0.00001*velLng,
            character.getLatLng().lng)
        );
        break;
    case global.keymap["moveEast"][0]:
    case global.keymap["moveEast"][1]:
    case global.keymap["moveEast"][2]:
        character.setLatLng(
            L.latLng(character.getLatLng().lat,
            character.getLatLng().lng+0.00001*velocity)
        );
        break;
    }
}

// unused
function onMapClick(e) {
    if (mouseMoved !== true) {
        const mouseClickDaemonizer = setInterval(function() {
            mouseMoved = true;
            vel = defaultMovementLength;
            const latDiff = e.latlng.lat - global.player.getLatLng().lat;
            const lngDiff = e.latlng.lng - global.player.getLatLng().lng;
            let forcedDirection;
            const latDiffAbs = Math.abs(latDiff);
            const lngDiffAbs = Math.abs(lngDiff);
            if (latDiffAbs > lngDiffAbs) {
                if (latDiff>0) {forcedDirection='w';} else {forcedDirection='s';}
            } else {
                if (lngDiff>0) {forcedDirection='d';} else {forcedDirection='a';}
            }
            if (document.getElementById('openModal').innerText === 'false') {
                moveCharacter(global.player, vel, forcedDirection);
            }
            // alert(vars + "strings"); works
            if (defaultMovementLength/50000 > Math.max(latDiffAbs, lngDiffAbs)) {
                clearInterval(mouseClickDaemonizer);
                mouseMoved = false;
            }
        }, refreshRate);
    }
}

module.exports.targetFleeFromPlayer = targetFleeFromPlayer;
module.exports.targetGoToPlayer = targetGoToPlayer;
module.exports.goToPlayer = goToPlayer;
module.exports.moveCharacter = moveCharacter;
module.exports.onMapClick = onMapClick;