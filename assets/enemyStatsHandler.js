let health,atk,def,vel,btc;

const enemyStatsChanges = {
    "death":       [1],
    "dracula":     [2],// chupa vida
    "empire1":     [2],
    "empire2":     [1],
    "gollum":      [1],// roba 1 oro
    "jabba":       [1],// roba comida
    "joker":       [1],// asusta
    "mummy":       [3],// ralentiza
    "owl":         [1],// invierte movimiento //
    "phantom":     [1],// randomiza movimiento
    "pirateskull": [2],//
    "skeleton":    [2], 
    "spider":      [1],// ralentiza
    "undeadhand":  [1]//
}

function enemyStatsHandler(objective, callback) {
    health = parseFloat(document.getElementById('health').innerHTML);
    health -= enemyStatsChanges[objective][0];
    document.getElementById('health').innerHTML = health;
    // vel = parseFloat(document.getElementById('vel').innerHTML);
    callback(health);
}

module.exports = enemyStatsHandler;
