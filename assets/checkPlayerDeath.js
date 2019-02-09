const nDeathSounds = 6;
let deathSound;

function checkPlayerDeath(health) {
    if (health<1) {
        try {
            deathSound = new Audio("../sounds/battlers/playerMaleDeath"+Math.ceil(nDeathSounds*Math.random())+".wav");
        } catch (e) { // HTML
            alert(e);
            deathSound = new Audio("sounds/battlers/playerMaleDeath"+Math.ceil(nDeathSounds*Math.random())+".wav");
        }
        deathSound.play();
        alert('Game Over');
    }
}

module.exports = checkPlayerDeath;