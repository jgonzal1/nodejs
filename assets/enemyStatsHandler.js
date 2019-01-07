const healthHandler = require('./healthHandler');
let health,atk,def,vel,btc;

function enemyStatsHandler(objective) {
    health = parseFloat(document.getElementById('health').innerHTML);
    vel = parseFloat(document.getElementById('vel').innerHTML);
    alert("enemyStatsHandler");
    switch (objective) {
    case "bloodyeye": //
        health -= 1;
        return health;
    case "death":
        health -= 2;
        return health;
    case "dracula": // chupa vida
        health -= 2;
        return health;
    case "empire1":
        health -= 1;
        return health;
    case "empire2":
        health -= 1;
        return health;
    case "gollum": // roba 1 oro
        health -= 1;
        return health;
    case "jabba": // roba comida
        health -= 1;
        return health;
    case "joker": // asusta
        health -= 3;
        return health;
    case "mummy": // ralentiza
        health -= 1;
        return health;
    case "owl": // invierte movimiento //
        health -= 1;
        return health;
    case "phantom": // randomiza movimiento
        health -= 1;
        return health;
    case "pirateskull": //
        health -= 2;
        return health;
    case "skeleton":
        health -= 2;
        return health;
    case "spider": // ralentiza
        health -= 1;
        return health;
    case "undeadhand": //
        health -= 1;
        return health;
    }
}

module.exports = enemyStatsHandler;
