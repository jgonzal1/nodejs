function loadEnemyBattle(enemyName) {
    var ec = document.getElementById("enemyCanvas");
    var eCtx = ec.getContext("2d");
    // ctx.clearRect(0, 0, c.width, c.height);
    // var playerImage = document.getElementById('marluxia');
    var enemyImage = document.getElementById(enemyName);
    // ctx.drawImage(playerImage,0,0);
    eCtx.drawImage(enemyImage, 0, 0); // 260,0
}

module.exports = loadEnemyBattle;