function checkEnemyDeathOnModal(health) {
    if (health<1) {
        try {
            document.getElementById("battleLogs").innerHTML += "The enemy was defeated!<br>";
            var ec = document.getElementById("fightersCanvas");
            var eCtx = ec.getContext("2d");
            eCtx.clearRect(320, 0, ec.width, ec.height);
        } catch (e) { // HTML
            alert(e);
        }
    }
}

module.exports = checkEnemyDeathOnModal;