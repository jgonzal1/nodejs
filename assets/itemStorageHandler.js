const objectiveStatsHandler = require("./objectiveStatsHandler");
const itemRoomHandler = require("./itemRoomHandler");

/**
 * @param {string} objectiveItem
 *   'backpack,      'banana',   'blackberry',
 *   'boots',        'burger',   'chicken',
 *   'healthpotion', 'knife',    'pizza',
 *   'rice',         'steelaxe', 'sword',
 *   'water'
 * @param {number} quantity
 * @returns (c)ell;        resource(i);
 *          (d)escription; quantity (h)ere;
 */
function itemStorageHandler(objectiveItem, quantity) {
    // objectiveItem = "burger"; //(y cambiar la variable que importamos arriba quitandole la m por ejemplo)
    itemRoomHandler(objectiveItem, true);
    quantity = ( quantity || 1);
    var storageTable = document.getElementById("itemStorageTable").getElementsByTagName('tbody')[0];

    if (document.getElementById(objectiveItem+"Stack")==null) {
        alert("objectiveItem en itemStorageHandler " + objectiveItem);
        var rowTM = storageTable.insertRow(storageTable.rows.length);
        rowTM.id = objectiveItem+"Stack";

        var ciTM = rowTM.insertCell(0); var iTM = document.createElement('img');
        iTM.src = 'style/objectives/'+objectiveItem+'.png'; iTM.width = 32; iTM.height = 32;
        iTM.addEventListener("click", function() {
            var item = document.getElementById(objectiveItem+"Stack");
            objectiveStatsHandler(objectiveItem);
            itemRoomHandler(objectiveItem, false);
            if (document.getElementById(objectiveItem+"Quantity")==null) { //should never be
                item.parentNode.removeChild(item);
            } else {
                if (parseFloat(document.getElementById(objectiveItem+"Quantity").innerHTML) < 2) {
                    item.parentNode.removeChild(item);
                }
                document.getElementById(objectiveItem+"Quantity").innerHTML = parseFloat(document.getElementById(objectiveItem+"Quantity").innerHTML)-1;
            }
        }, false);
        ciTM.appendChild(iTM);

        var cdTM = rowTM.insertCell(1);
        var dTM = document.createTextNode( objectiveItem );
        cdTM.appendChild(dTM);

        var chTM = rowTM.insertCell(2);
        chTM.id = objectiveItem+"Quantity";
        var hTM = document.createTextNode( quantity );
        chTM.appendChild(hTM);
    } else {
        document.getElementById(objectiveItem+"Quantity").innerHTML = parseFloat(document.getElementById(objectiveItem+"Quantity").innerHTML)+1;
    }
    // alert(document.getElementById(objectiveItem+"Quantity").outerHTML);
}

module.exports = itemStorageHandler;