const itemStorageHandler = require("./itemStorageHandler");
const objectiveStatsHandler = require("./objectiveStatsHandler");
const itemRoomHandler = require("./itemRoomHandler");

/**
 *  @param {number} atk
 *  @param {string} itemToWield 
 */
function attackHandler(atk, itemToWield) {
    var atkWieldedItem = document.getElementById("atkWieldedItem").innerHTML;
    var atkWieldedItemOuter = document.getElementById("atkWieldedItem").outerHTML;
    var oldAtk = parseFloat(document.getElementById('atk').innerHTML);
    // if (atk > oldAtk) {
    alert("atkWieldedItem" + atkWieldedItemOuter);
    if (atkWieldedItem!="") {
        itemRoomHandler(objectiveItem, true);
        var quantity = 1;
        var storageTable = document.getElementById("itemStorageTable").getElementsByTagName('tbody')[0];
        
        var rowTM = storageTable.insertRow(storageTable.rows.length);
        rowTM.id = atkWieldedItem+"Stack";
        
        var ciTM = rowTM.insertCell(0); var iTM = document.createElement('img');
        iTM.src = 'style/objectives/'+atkWieldedItem+'.png'; iTM.width = 32; iTM.height = 32;
        iTM.addEventListener("click", function() {
            atkWieldedItem = document.getElementById("atkWieldedItem").innerHTML;
            var item = document.getElementById(atkWieldedItem+"Stack");
            objectiveStatsHandler(atkWieldedItem);
            itemRoomHandler(atkWieldedItem, false);
            if (document.getElementById(atkWieldedItem+"Quantity")==null) {
                item.parentNode.removeChild(item);
            } else {
                if (parseFloat(document.getElementById(atkWieldedItem+"Quantity").innerHTML) < 2) {
                    item.parentNode.removeChild(item);
                } else {
                    document.getElementById(atkWieldedItem+"Quantity").innerHTML = parseFloat(document.getElementById(atkWieldedItem+"Quantity").innerHTML)-1;
                }
            }
        }, false);
        ciTM.appendChild(iTM);
        
        var cdTM = rowTM.insertCell(1);
        var dTM = document.createTextNode( atkWieldedItem );
        cdTM.appendChild(dTM);
        
        var chTM = rowTM.insertCell(2);
        chTM.id = atkWieldedItem+"Quantity";        
        var hTM = document.createTextNode( quantity );
        chTM.appendChild(hTM);
    }
    document.getElementById("atkWieldedItem").innerText = itemToWield;
    document.getElementById('atk').innerHTML = atk;
    //} else {
    //    alert("¡Actualmente ya tienes más ataque!");
    //}
}

module.exports = attackHandler;