const healthHandler = require("./healthHandler");
const checkPlayerDeath = require("./checkPlayerDeath");
const checkEnemyDeathOnModal = require("./checkEnemyDeathOnModal");

const enemySelfHitpoints = {
    "death":       9, 
    "dracula":     8, // chupa vida
    "empire1":     7, 
    "empire2":     7, 
    "gollum":      5, // roba 1 oro
    "jabba":      10, // roba comida
    "joker":       4, // asusta
    "mummy":       5, // ralentiza
    "owl":         3, // invierte movimiento //
    "phantom":     4, // randomiza movimiento
    "pirateskull": 6, //
    "skeleton":    5,  
    "spider":      3, // ralentiza
    "undeadhand":  3  //
};

function loadEnemyBattle(enemyName) {
    var ec = document.getElementById("fightersCanvas");
    var eCtx = ec.getContext("2d");
    eCtx.clearRect(0, 0, ec.width, ec.height);

    var playerImage = document.getElementById('toad');
    var enemyImage = document.getElementById(enemyName);
    eCtx.drawImage(playerImage, 0, 0);
    eCtx.drawImage(enemyImage, 380, 0);

    var healthBar = document.getElementById('health-bar');
    eCtx.drawImage(healthBar, global.hblp, 0);
    eCtx.drawImage(healthBar, global.hbrp, 0);
    var health = parseFloat(document.getElementById('health').innerHTML);
    var opponentHealth = enemySelfHitpoints[enemyName]; // parseFloat(
    document.getElementById('opponentHealth').innerHTML = opponentHealth; // );
    document.getElementById('maxOpponentHealth').innerHTML = opponentHealth;
    healthHandler(health);
    checkPlayerDeath(health);
    healthHandler(opponentHealth,'r',opponentHealth);
    checkEnemyDeathOnModal(opponentHealth);
    // eCtx.drawImage(healthMin, global.hbrp+healthBarLifePos[0], 0+healthBarLifePos[1]);
    // eCtx.drawImage(healthChunk, global.hbrp+10+healthBarLifePos[0], 0+healthBarLifePos[1]);
}

module.exports = loadEnemyBattle;