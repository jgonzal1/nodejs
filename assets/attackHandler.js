// const itemStorageHandler = require("./itemStorageHandler");
// const objectiveStatsHandler = require("./objectiveStatsHandler");
const itemRoomHandler = require("./itemRoomHandler");

/**
 *  @param {number} atk
 *  @param {string} itemToWield 
 */
function attackHandler(atk, itemToWield) {
    var atkWieldedItem = document.getElementById("atkWieldedItem").innerHTML;
    // var atkWieldedItemOuter = document.getElementById("atkWieldedItem").outerHTML;
    // var oldAtk = parseFloat(document.getElementById('atk').innerHTML);
    // if (atk > oldAtk) {
    if (atkWieldedItem!="") {
        //alert("atkWieldedItem" + atkWieldedItemOuter);
        document.getElementById("itemToWield").innerHTML = itemToWield;
        itemRoomHandler(atkWieldedItem, true);
        itemRoomHandler(itemToWield, false);
        var quantity = 1;
        var storageTable = document.getElementById("itemStorageTable").getElementsByTagName('tbody')[0];
        //if (document.getElementById(itemToWield+"Stack")==null) {
            var rowTM = storageTable.insertRow(storageTable.rows.length);
            rowTM.id = atkWieldedItem+"Stack";
            
            var ciTM = rowTM.insertCell(0); var iTM = document.createElement('img');
            iTM.src = 'style/objectives/'+atkWieldedItem+'.png'; iTM.width = 32; iTM.height = 32;
            iTM.addEventListener("click", function() {
                atkWieldedItem = document.getElementById("atkWieldedItem").innerHTML;

                iTM.src = 'style/objectives/'+atkWieldedItem+'.png';

                // var itemToWieldStackName = iTM.parentNode.id;
                // var item = document.getElementById(itemToWieldStackName);
                // var item = iTM.parentNode;
                var _dTM = iTM.nextSibling.firstChild.innerHTML;
                itemToWield = _dTM;
                _dTM = atkWieldedItem;

                switch (atkWieldedItem) {
                case "knife":
                    document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)+0.2)*10)/10;
                    break;
                case "steelaxe":
                    document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)+  1)*10)/10;
                    break;
                case "sword":
                    document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)+  3)*10)/10;
                    break;
                }

                atk = parseFloat(document.getElementById('atk').innerHTML);
                switch (itemToWield) {
                case "knife":
                    document.getElementById('atk').innerHTML = 2;
                    document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)-0.2)*10)/10;
                    break;
                case "steelaxe":
                    document.getElementById('atk').innerHTML = 3;
                    document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)-  1)*10)/10;
                    break;
                case "sword":
                    document.getElementById('atk').innerHTML = 4;
                    document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)-  3)*10)/10;
                    break;
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
        //} else {
        //    alert("Al cambiar objetos, del que se va a equipar hay más de uno. ToDo");
        //}
    }
    document.getElementById("atkWieldedItem").innerText = itemToWield;
    document.getElementById('atk').innerHTML = atk;
    //} else {
    //    alert("¡Actualmente ya tienes más ataque!");
    //}
}

module.exports = attackHandler;