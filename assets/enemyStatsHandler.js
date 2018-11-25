const healthHandler = require('./healthHandler');
let health,atk,def,vel,btc;

function enemyStatsHandler(objective) {
    health = parseFloat(document.getElementById('health').innerHTML);
    vel = parseFloat(document.getElementById('vel').innerHTML);
    switch (objective) {
    case "bloodyeye":
        health -= 1;
        healthHandler(health);
        break;
    case "death":
        health -= 2;
        healthHandler(health);
        break;
    case "dracula": // chupa vida
        health -= 2;
        healthHandler(health);
        break;
    case "empire1":
        health -= 1;
        healthHandler(health);
        break;
    case "empire2":
        health -= 1;
        healthHandler(health);
        break;
    case "gollum": // roba 1 oro
        health -= 1;
        healthHandler(health);
        break;
    case "jabba": // roba comida
        health -= 1;
        healthHandler(health);
        break;
    case "joker": // asusta
        health -= 3;
        healthHandler(health);
        break;
    case "mummy": // ralentiza
        health -= 1;
        healthHandler(health);
        break;
    case "owl": // invierte movimiento
        health -= 1;
        healthHandler(health);
        break;
    case "phantom": // randomiza movimiento
        health -= 1;
        healthHandler(health);
        break;
    case "pirateskull":
        health -= 2;
        healthHandler(health);
        break;
    case "skeleton":
        health -= 2;
        healthHandler(health);
        break;
    case "spider": // ralentiza
        health -= 1;
        healthHandler(health);
        break;
    case "undeadhand":
        health -= 1;
        healthHandler(health);
        break;
    case "vampire": // chupa % vida
        health -= 1;
        healthHandler(health);
        break;
    }
}

module.exports = enemyStatsHandler;
