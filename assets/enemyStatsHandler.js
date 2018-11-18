const healthHandler = require('./healthHandler');
let health,atk,def,vel,btc;

function enemyStatsHandler(objective) {
    health = parseFloat(document.getElementById('health').innerHTML);
    vel = parseFloat(document.getElementById('vel').innerHTML);
    switch (objective) {
    case "Ojo sangriento":
        health -= 1;
        healthHandler(health);
        break;
    case "Reaper":
        health -= 2;
        healthHandler(health);
        break;
    case "Momia": // ralentiza
        health -= 1;
        healthHandler(health);
        break;
    case "Búho": // invierte movimiento
        health -= 1;
        healthHandler(health);
        break;
    case "Fantasma": // randomiza movimiento
        health -= 1;
        healthHandler(health);
        break;
    case "Esqueleto pirata":
        health -= 2;
        healthHandler(health);
        break;
    case "Esqueleto":
        health -= 2;
        healthHandler(health);
        break;
    case "Araña": // ralentiza
        health -= 1;
        healthHandler(health);
        break;
    case "Mano cercenada":
        health -= 1;
        healthHandler(health);
        break;
    case "Murciélago": // chupa % vida
        health -= 1;
        healthHandler(health);
        break;
    }
}

module.exports = enemyStatsHandler;
