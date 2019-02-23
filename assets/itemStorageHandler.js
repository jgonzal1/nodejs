const objectiveStatsHandler = require("./objectiveStatsHandler");
/**
 * @param {string} objectiveItem
 *   'backpack,      'banana',   'blackberry',
 *   'boots',        'burger',   'chicken',
 *   'healthpotion', 'knife',    'pizza',
 *   'rice',         'steelaxe', 'sword',
 *   'water'
 * @param {boolean} ioItem TRUE (+) FALSE (-)
 * @returns 'room' modified
 */
function itemRoomHandler(objectiveItem, ioItem) {
    let room = 0; if (ioItem) {room = 1;} else {room = -1;}
    switch (objectiveItem) {
    case "burger":
        room *= 0.6;
        document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)+0.6)*10)/10;
        break;
    case "banana":
        room *= 0.2;
        document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)+room)*10)/10;
        break;
    case "blackberry":
        room *= 0.4;
        document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)+room)*10)/10;
        break;
    case "boots":
        room *= 0.8;
        document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)+room)*10)/10;
        break;
    case "chicken":
        room *= 0.5;
        document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)+room)*10)/10;
        break;
    case "healthpotion":
        room *= 0.5;
        document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)+room)*10)/10;
        break;
    case "knife":
        room *= 0.2;
        document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)+room)*10)/10;
        break;
    case "pizza":
        room *= 0.8;
        document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)+room)*10)/10;
        break;
    case "rice":
        room *= 0.3;
        document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)+room)*10)/10;
        break;
    case "steelaxe":
        room *= 1  ;
        document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)+room)*10)/10;
        break;
    case "sword":
        room *= 3  ;
        document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)+room)*10)/10;
        break;
    case "water":
        room *= 1  ;
        document.getElementById('room').innerHTML = Math.round((parseFloat(document.getElementById('room').innerHTML)+room)*10)/10;
        break;
    }
}
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
        var rowTM = storageTable.insertRow(storageTable.rows.length);
        rowTM.id = objectiveItem+"Stack";

        var ciTM = rowTM.insertCell(0); var iTM = document.createElement('img');
        iTM.src = 'style/objectives/'+objectiveItem+'.png'; iTM.width = 32; iTM.height = 32;
        iTM.addEventListener("click", function(){
            var item = document.getElementById(objectiveItem+"Stack");
            objectiveStatsHandler(objectiveItem);
            itemRoomHandler(objectiveItem, false);
            if (document.getElementById(objectiveItem+"Quantity")==null) {
                item.parentNode.removeChild(item);
            } else {
                if (parseFloat(document.getElementById(objectiveItem+"Quantity").innerHTML) < 2) {
                    item.parentNode.removeChild(item);
                } else {
                    document.getElementById(objectiveItem+"Quantity").innerHTML = parseFloat(document.getElementById(objectiveItem+"Quantity").innerHTML)-1;
                }
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
    alert(document.getElementById(objectiveItem+"Quantity").outerHTML);
}

module.exports = itemStorageHandler;