let health,atk,def,vel,btc;

function enemyStatsHandler(objective, callback) {
    health = parseFloat(document.getElementById('health').innerHTML);
    vel = parseFloat(document.getElementById('vel').innerHTML);
    // alert("enemyStatsHandler");
    switch (objective) {
    case "bloodyeye": //
        health -= 1;
        callback(health);
        break;
    case "death":
        health -= 2;
        callback(health);
        break;
    case "dracula": // chupa vida
        health -= 2;
        callback(health);
        break;
    case "empire1":
        health -= 1;
        callback(health);
        break;
    case "empire2":
        health -= 1;
        callback(health);
        break;
    case "gollum": // roba 1 oro
        health -= 1;
        callback(health);
        break;
    case "jabba": // roba comida
        health -= 1;
        callback(health);
        break;
    case "joker": // asusta
        health -= 3;
        callback(health);
        break;
    case "mummy": // ralentiza
        health -= 1;
        callback(health);
        break;
    case "owl": // invierte movimiento //
        health -= 1;
        callback(health);
        break;
    case "phantom": // randomiza movimiento
        health -= 1;
        callback(health);
        break;
    case "pirateskull": //
        health -= 2;
        callback(health);
        break;
    case "skeleton":
        health -= 2;
        callback(health);
        break;
    case "spider": // ralentiza
        health -= 1;
        callback(health);
        break;
    case "undeadhand": //
        health -= 1;
        callback(health);
        break;
    }
}

module.exports = enemyStatsHandler;
