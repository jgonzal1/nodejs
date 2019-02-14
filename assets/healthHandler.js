// global.hblp = 110; // healthBarLeftPos
// global.hbrp = 490; // healthBarRightPos
const hbhp = [26, 12]; // healthBarHpPos
document.getElementById('hblp').innerText = 110;
document.getElementById('hbrp').innerText = 490;
document.getElementById('hbrpw').innerText = hbhp[0];
document.getElementById('hbrph').innerText = hbhp[1];

/** @typedef l_OR_r @type {object} @type {l_OR_r} */
/** @param {number} hp 
 *  @param {l_OR_r} side 
 */
function healthHandler(hp, side, maxHp) {
    side = side || "l";
    maxHp = maxHp || 5;
    var healthBarPointerInCanvas;
    var ec = document.getElementById("fightersCanvas");
    var eCtx = ec.getContext("2d");
    var hb = document.getElementById('health-bar');
    var hn = document.getElementById('health-none');
    // var hm = document.getElementById('health-min');
    var hc = document.getElementById('health-chunk');

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

        // drawImage (img, cnv_x_i, cnv_y_i, img_w, img_h)
        eCtx.drawImage(hb, healthBarPointerInCanvas, 0);
        eCtx.drawImage( // true health
            hc,
            healthBarPointerInCanvas+hbhp[0],
            hbhp[1],
            ( hp>5 ? 50 : ( hp<0 ? 0 : 10*hp) ),
            7
        );
        eCtx.drawImage( // void health
            hn,
            ( hp>5 ? 50+healthBarPointerInCanvas+hbhp[0] : (10*hp)+healthBarPointerInCanvas+hbhp[0] ),
            hbhp[1],
            ( hp>5 ? 0                                   : 50-10*hp ),
            7
        );

        document.getElementById('health').innerText = hp;
    } else if (side === "r") {
        healthBarPointerInCanvas = 490;

        // drawImage (img, cnv_x_i, cnv_y_i, img_w, img_h)
        eCtx.drawImage(hb, healthBarPointerInCanvas, 0);
        eCtx.drawImage( // true health
            hc,
            healthBarPointerInCanvas+hbhp[0],
            hbhp[1],
            (hp<0 ? 0 : Math.round(50*hp/maxHp)),
            7
        );
        eCtx.drawImage( // void health
            hn,
            Math.round(50*hp/maxHp) + healthBarPointerInCanvas+hbhp[0],
            hbhp[1],
            Math.round(50*(1-hp/maxHp)),
            7
        );
    }
}

module.exports = healthHandler;