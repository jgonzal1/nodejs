const healthHandler = require('./healthHandler');
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
        document.getElementById('backpack').style = "";
        return "8L de almacenamiento de un objeto de 4L";
    case "burger":
        health += 4;
        healthHandler(health);
        return "4 HP / h sin hambre de un objeto de 600ml";
    case "banana":
        health += 1;
        healthHandler(health);
        return "1 HP / h sin hambre de un objeto de 200ml";
    case "blackberry":
        health += 2;
        healthHandler(health);
        return "2 HP / h sin hambre de un objeto de 400ml";
    case "boots":
        vel *= 1.5;
        document.getElementById('vel').innerHTML = vel; 
        return "un multiplicador de x1.5 de velocidad de un objeto que ocupa 800ml sin equipar";
    case "chicken":
        health += 3;
        healthHandler(health);
        return "3 HP / h sin hambre de un objeto que ocupa 500ml";
    case "healthpotion":
        health += 4;
        healthHandler(health);
        return "4 HP / h sin hambre y sed de un objeto que ocupa 500ml";
    case "knife":
        atk += 1;
        document.getElementById('atk').innerHTML = atk; 
        return "+1 atk de un objeto de 200ml";
    case "pizza":
        health += 4;
        healthHandler(health);
        return "4 HP / h sin hambre de un objeto que ocupa 800ml";
    case "rice":
        health += 2;
        healthHandler(health);
        return "2 HP / h sin hambre de un objeto que ocupa 300ml";
    case "steelaxe":
        atk += 2;
        document.getElementById('atk').innerHTML = atk; 
        return "+2 atk de un objeto de 1L";
    case "sword":
        atk += 3;
        document.getElementById('atk').innerHTML = atk; 
        return "+3 atk de un objeto que te ocupa ambas manos";
    case "water":
        health += 1;
        healthHandler(health);
        return "1 HP / 12 h sin sed de un objeto que ocupa 1L";
    }
}

module.exports = objectiveStatsHandler;
