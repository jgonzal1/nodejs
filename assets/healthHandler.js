const nDeathSounds = 6;
let deathSound;

function checkPlayerDeath(health) {
    if (health<1) {
        deathSound = new Audio("../sounds/battlers/playerMakeDeath"+Math.ceil(nDeathSounds*Math.random())+".wav");
        deathSound.play();
        alert('Game Over');
    }
}

function healthHandler(hp) {
    var c = document.getElementById("healthCanvas");
    var ctx = c.getContext("2d");
    var fh = document.getElementById("fh");
    // var hh = document.getElementById("hh");
    var lh = document.getElementById("lh");
    ctx.drawImage(hp<1?lh:fh,0,0);
    ctx.drawImage(hp<2?lh:fh,16,0);
    ctx.drawImage(hp<3?lh:fh,32,0);
    ctx.drawImage(hp<4?lh:fh,48,0);
    ctx.drawImage(hp<5?lh:fh,64,0);
    checkPlayerDeath(hp);
    document.getElementById('health').innerText = hp;
}

module.exports = healthHandler;