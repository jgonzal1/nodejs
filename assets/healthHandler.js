const nDeathSounds = 6;
const hblp = 110;
const hbrp = 490;
const hbhpw = 26;
const hbhph = 12;
document.getElementById("hblp").innerText  = hblp;  // healthBarLeftPos
document.getElementById("hbrp").innerText  = hbrp;  // healthBarRightPos
document.getElementById("hbhpw").innerText = hbhpw; // hbhp = [26, 12];
document.getElementById("hbhph").innerText = hbhph; // healthBarHpPos↑
let deathSound;

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
    }

    var ec = document.getElementById("fightersCanvas");
    var eCtx = ec.getContext("2d");
    var hn = document.getElementById('health-none');
    var hm = document.getElementById('health-min');
    var hc = document.getElementById('health-chunk');
    eCtx.drawImage(hp<1?hn:hm, /*(side=='l'?*/hblp/*:hbrp)*/   +hbhpw, 0+hbhph);
    eCtx.drawImage(hp<2?hn:hc, /*(side=='l'?*/hblp/*:hbrp)*/+10+hbhpw, 0+hbhph);
    eCtx.drawImage(hp<3?hn:hc, /*(side=='l'?*/hblp/*:hbrp)*/+20+hbhpw, 0+hbhph);
    eCtx.drawImage(hp<4?hn:hc, /*(side=='l'?*/hblp/*:hbrp)*/+30+hbhpw, 0+hbhph);
    eCtx.drawImage(hp<5?hn:hc, /*(side=='l'?*/hblp/*:hbrp)*/+40+hbhpw, 0+hbhph);


    if (side === "l") {
        checkPlayerDeath(hp);
        document.getElementById('health').innerText = hp;
    } else if (side === "r") {
        document.getElementById('opponentHealth').innerText = hp;
    }
    alert("healthHandler");
}

module.exports = healthHandler;