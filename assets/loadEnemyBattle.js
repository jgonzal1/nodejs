
function loadEnemyBattle(enemyName) {
    var ec = document.getElementById("fightersCanvas");
    var eCtx = ec.getContext("2d");
    eCtx.clearRect(0, 0, ec.width, ec.height);
    var healthBar = document.getElementById('health-bar');
    var playerImage = document.getElementById('toad');
    var enemyImage = document.getElementById(enemyName);
    eCtx.drawImage(playerImage, 0, 0);
    eCtx.drawImage(healthBar, 110, 0);
    eCtx.drawImage(enemyImage, 380, 0);
    eCtx.drawImage(healthBar, 490, 0);
}

module.exports = loadEnemyBattle;