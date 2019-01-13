// global.hblp = 110; // healthBarLeftPos
// global.hbrp = 490; // healthBarRightPos
const hbhp = [26, 12]; // healthBarHpPos
document.getElementById('hblp').innerText = 110;
document.getElementById('hbrp').innerText = 490;
document.getElementById('hbrpw').innerText = hbhp[0];
document.getElementById('hbrph').innerText = hbhp[1];
let healthBarPointerInCanvas;

/** @typedef l_OR_r @type {object} @type {l_OR_r} */
/**
 * @param {number} hp 
 * @param {l_OR_r} side 
 */
function healthHandler(hp, side) {
    side = side || "l";
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
        document.getElementById('health').innerText = hp;
        alert(hp);
    } else if (side === "r") {
        healthBarPointerInCanvas = 490;
        document.getElementById('opponentHealth').innerText = hp;
    }
    var ec = document.getElementById("fightersCanvas");
    var eCtx = ec.getContext("2d");
    var hb = document.getElementById('health-bar');
    var hn = document.getElementById('health-none');
    var hm = document.getElementById('health-min');
    var hc = document.getElementById('health-chunk');
    var i7x10 = document.getElementById('7x10');
    var i7x10i = document.getElementById('7x10i');
    // eCtx.clearRect(0, 0, ec.width, ec.height);
    eCtx.drawImage(hb,         healthBarPointerInCanvas,            0);
    // eCtx.clearRect(healthBarPointerInCanvas+hbhp[0], 0+hbhp[1], 50, 7);
    var newPos1 = Math.round(50*Math.random());
    var newPos2 = Math.round(50*Math.random());
    eCtx.drawImage(hp<1?i7x10:i7x10i, newPos1   +healthBarPointerInCanvas+hbhp[0], newPos2+hbhp[1]); //hn:hm
    eCtx.drawImage(hp<2?i7x10:i7x10i, newPos1+10+healthBarPointerInCanvas+hbhp[0], newPos2+hbhp[1]); //hn:hc
    eCtx.drawImage(hp<3?i7x10:i7x10i, newPos1+20+healthBarPointerInCanvas+hbhp[0], newPos2+hbhp[1]);
    eCtx.drawImage(hp<4?i7x10:i7x10i, newPos1+30+healthBarPointerInCanvas+hbhp[0], newPos2+hbhp[1]);
    eCtx.drawImage(hp<5?i7x10:i7x10i, newPos1+40+healthBarPointerInCanvas+hbhp[0], newPos2+hbhp[1]);
}

module.exports = healthHandler;