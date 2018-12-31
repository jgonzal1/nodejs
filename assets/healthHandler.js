const nDeathSounds = 6;
global.hblp = 110; // healthBarLeftPos
global.hbrp = 490; // healthBarRightPos
global.hbhp = [26, 12]; // healthBarHpPos
let deathSound;

function checkPlayerDeath(health) {
    if (health<1) {
        deathSound = new Audio("../sounds/battlers/playerMaleDeath"+Math.ceil(nDeathSounds*Math.random())+".wav");
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

    var ec = document.getElementById("fightersCanvas");
    var eCtx = ec.getContext("2d");
    var hn = document.getElementById('health-none');
    var hm = document.getElementById('health-min');
    var hc = document.getElementById('health-chunk');
    eCtx.drawImage(hp<1?hn:hm, global.hblp + global.hbhp[0], 0+global.hbhp[1]);
    eCtx.drawImage(hp<2?hn:hc,global.hblp+10+global.hbhp[0], 0+global.hbhp[1]);
    eCtx.drawImage(hp<3?hn:hc,global.hblp+10+global.hbhp[0], 0+global.hbhp[1]);
    eCtx.drawImage(hp<4?hn:hc,global.hblp+10+global.hbhp[0], 0+global.hbhp[1]);
    eCtx.drawImage(hp<5?hn:hc,global.hblp+10+global.hbhp[0], 0+global.hbhp[1]);

    checkPlayerDeath(hp);
    document.getElementById('health').innerText = hp;
}

module.exports = healthHandler;