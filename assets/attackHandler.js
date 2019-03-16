const itemRoomHandler = require("./itemRoomHandler");
/**
 *  @param {number} atk
 *  @param {string} itemToWield 
 */
function attackHandler(atk, itemToWield) {
    var atkWieldedItem = document.getElementById("atkWieldedItem").innerHTML;
    if (atkWieldedItem!="") {
        document.getElementById("itemToWield").innerHTML = itemToWield;
        itemRoomHandler(atkWieldedItem, true);
        var quantity = 1;
        var storageTable = document.getElementById("itemStorageTable").getElementsByTagName('tbody')[0];
        var _cdTM;

        var rowTM = storageTable.insertRow(storageTable.rows.length);
        rowTM.id = atkWieldedItem+"Stack";
        var ciTM = rowTM.insertCell(0); var iTM = document.createElement('img');
        iTM.src = 'style/objectives/'+atkWieldedItem+'.png'; iTM.width = 32; iTM.height = 32;
        ciTM.appendChild(iTM);
        var cdTM = rowTM.insertCell(1);
        var dTM = document.createTextNode( atkWieldedItem );
        dTM.id = atkWieldedItem+"Name";
        cdTM.appendChild(dTM);
        var chTM = rowTM.insertCell(2);
        chTM.id = atkWieldedItem+"Quantity";
        var hTM = document.createTextNode( quantity );
        chTM.appendChild(hTM);

        rowTM.addEventListener("click", function() {
            atkWieldedItem = document.getElementById("atkWieldedItem").innerText;
            _cdTM = rowTM.firstChild.nextSibling;
            itemToWield = _cdTM.innerHTML;
            rowTM.firstChild.firstChild.src = 'style/objectives/'+atkWieldedItem+'.png';
            _cdTM.innerHTML = atkWieldedItem;

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
            
            document.getElementById("atkWieldedItem").innerText = itemToWield;
        }, false);

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
    }
    document.getElementById("atkWieldedItem").innerText = itemToWield;
    document.getElementById('atk').innerHTML = atk;
}

module.exports = attackHandler;