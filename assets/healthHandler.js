const nDeathSounds = 6;
// global.hblp = 110; // healthBarLeftPos
// global.hbrp = 490; // healthBarRightPos
const hbhp = [26, 12]; // healthBarHpPos
document.getElementById('hblp').innerText = 110;
document.getElementById('hbrp').innerText = 490;
document.getElementById('hbrpw').innerText = hbhp[0];
document.getElementById('hbrph').innerText = hbhp[0];
let deathSound, healthBarPointerInCanvas;

function checkPlayerDeath(health) {
    if (health<1) {
        deathSound = new Audio("../sounds/battlers/playerMaleDeath"+Math.ceil(nDeathSounds*Math.random())+".wav");
        deathSound.play();
        alert('Game Over');
    }
}

/** @typedef l_OR_r @type {object} @type {l_OR_r} */
/**
 * @param {number} hp 
 * @param {l_OR_r} side 
 */
function healthHandler(hp, side) {
    alert(hp);
    side = (side || "l");
    if (side === "l") {
        var c = document.getElementById("healthCanvas");
        var ctx = c.getContext("2d");
        var fh = document.getElementById("fh");
        // var hh = document.getElementById("hh");
        var lh = document.getElementById("lh");
        ctx.drawImage(hp<1?lh:fh,  0, 0);
        ctx.drawImage(hp<2?lh:fh, 16, 0);
        ctx.drawImage(hp<3?lh:fh, 32, 0);
        ctx.drawImage(hp<4?lh:fh, 48, 0);
        ctx.drawImage(hp<5?lh:fh, 64, 0);
        healthBarPointerInCanvas = 110;
    } else if (side === "r") {
        healthBarPointerInCanvas = 490;
    }

    var ec = document.getElementById("fightersCanvas");
    var eCtx = ec.getContext("2d");
    var hb = document.getElementById('health-bar');
    var hn = document.getElementById('health-none');
    var hm = document.getElementById('health-min');
    var hc = document.getElementById('health-chunk');
    eCtx.drawImage(hb,         healthBarPointerInCanvas,            0);
    eCtx.clearRect(healthBarPointerInCanvas+hbhp[0], 0+hbhp[1], 50, 7);
    eCtx.drawImage(hp<1?hn:hm, healthBarPointerInCanvas   +hbhp[0], 0+hbhp[1]);
    eCtx.drawImage(hp<2?hn:hc, healthBarPointerInCanvas+10+hbhp[0], 0+hbhp[1]);
    eCtx.drawImage(hp<3?hn:hc, healthBarPointerInCanvas+20+hbhp[0], 0+hbhp[1]);
    eCtx.drawImage(hp<4?hn:hc, healthBarPointerInCanvas+30+hbhp[0], 0+hbhp[1]);
    eCtx.drawImage(hp<5?hn:hc, healthBarPointerInCanvas+40+hbhp[0], 0+hbhp[1]);

    if (side === "l") {
        checkPlayerDeath(hp);
        document.getElementById('health').innerText = hp;
    } else if (side === "r") {
        document.getElementById('opponentHealth').innerText = hp;
    }
    // alert("healthHandler");
}

module.exports = healthHandler;