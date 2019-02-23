const itemStorageHandler = require("./itemStorageHandler");
/**
 *  @param {number} atk
 *  @param {string} itemToWield 
 */
function attackHandler(atk, itemToWield) {
    var atkWieldedItem = document.getElementById("atkWieldedItem").innerHTML;
    var oldAtk = parseFloat(document.getElementById('atk').innerHTML);
    if (atk > oldAtk) {
        if (atkWieldedItem) {
            itemStorageHandler(atkWieldedItem);
        }
        document.getElementById("atkWieldedItem").innerText = itemToWield;
        document.getElementById('atk').innerHTML = atk;
    } else {
        alert("¡Actualemnte ya tienes más ataque!");
    }
}

module.exports = attackHandler;