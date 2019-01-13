const healthHandler = require("./healthHandler");
const checkPlayerDeath = require("./checkPlayerDeath");

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
    var opponentHealth = parseFloat(document.getElementById('opponentHealth').innerHTML);
    healthHandler(health);
    checkPlayerDeath(health);
    healthHandler(opponentHealth,'r');
    // eCtx.drawImage(healthMin, global.hbrp+healthBarLifePos[0], 0+healthBarLifePos[1]);
    // eCtx.drawImage(healthChunk, global.hbrp+10+healthBarLifePos[0], 0+healthBarLifePos[1]);
}

module.exports = loadEnemyBattle;