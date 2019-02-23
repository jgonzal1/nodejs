const healthHandler = require('./healthHandler');
const attackHandler = require('./attackHandler');
let health,atk,def,vel,btc,room;

function objectiveStatsHandler(objective) {
    health = parseFloat(document.getElementById('health').innerHTML);
    atk = parseFloat(document.getElementById('atk').innerHTML);
    def = parseFloat(document.getElementById('def').innerHTML);
    vel = parseFloat(document.getElementById('vel').innerHTML);
    btc = parseFloat(document.getElementById('btc').innerHTML);
    room = parseFloat(document.getElementById('room').innerHTML);
    switch (objective) {
    case "backpack":
        // room += 8;
        // document.getElementById('room').innerHTML = room;
        document.getElementById('storageMethodDisplay').src = "style/interface/equipment.png";
        document.getElementById('storageMethodDisplay').style.height = "32px";
        document.getElementById('storageMethod').innerText = "Backpack";
        document.getElementById('availableRoom').innerHTML = "true";
        document.getElementById('storageRoom').style.display = "";
        return "8L de almacenamiento de un objeto de 4L";
    case "burger":
        health += 4;
        healthHandler(health);
        return "4 HP / h sin hambre";
    case "banana":
        health += 1;
        healthHandler(health);
        return "1 HP / h sin hambre";
    case "blackberry":
        health += 2;
        healthHandler(health);
        return "2 HP / h sin hambre";
    case "boots":
        vel *= 1.5;
        document.getElementById('vel').innerHTML = vel;
        return "un multiplicador de x1.5 de velocidad de un objeto que ocupa 800ml";
    case "chicken":
        health += 3;
        healthHandler(health);
        return "3 HP / h sin hambre";
    case "healthpotion":
        health += 4;
        healthHandler(health);
        return "4 HP / h sin hambre y sed";
    case "knife":
        atk += 1;
        attackHandler(atk);
        return "+1 atk";
    case "pizza":
        health += 4;
        healthHandler(health);
        return "4 HP / h sin hambre";
    case "rice":
        health += 2;
        healthHandler(health);
        return "2 HP / h sin hambre";
    case "steelaxe":
        atk += 2;
        attackHandler(atk);
        return "+2 atk";
    case "sword":
        atk += 3;
        attackHandler(atk);
        return "+3 atk de un objeto que te ocupa ambas manos";
    case "water":
        health += 1;
        healthHandler(health);
        return "1 HP / 12 h sin sed";
    }
}

module.exports = objectiveStatsHandler;
