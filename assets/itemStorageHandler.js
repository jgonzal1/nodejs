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
    switch (objectiveItem) {
    case "burger":
        document.getElementById('room').innerHTML = parseFloat(document.getElementById('room').innerHTML)+0.6;
        break;
    case "banana":
        document.getElementById('room').innerHTML = parseFloat(document.getElementById('room').innerHTML)+0.2;
        break;
    case "blackberry":
        document.getElementById('room').innerHTML = parseFloat(document.getElementById('room').innerHTML)+0.4;
        break;
    case "boots":
        document.getElementById('room').innerHTML = parseFloat(document.getElementById('room').innerHTML)+0.8;
        break;
    case "chicken":
        document.getElementById('room').innerHTML = parseFloat(document.getElementById('room').innerHTML)+0.5;
        break;
    case "healthpotion":
        document.getElementById('room').innerHTML = parseFloat(document.getElementById('room').innerHTML)+0.5;
        break;
    case "knife":
        document.getElementById('room').innerHTML = parseFloat(document.getElementById('room').innerHTML)+0.2;
        break;
    case "pizza":
        document.getElementById('room').innerHTML = parseFloat(document.getElementById('room').innerHTML)+0.8;
        break;
    case "rice":
        document.getElementById('room').innerHTML = parseFloat(document.getElementById('room').innerHTML)+0.3;
        break;
    case "steelaxe":
        document.getElementById('room').innerHTML = parseFloat(document.getElementById('room').innerHTML)+1;
        break;
    case "sword":
        document.getElementById('room').innerHTML = parseFloat(document.getElementById('room').innerHTML)+3;
        break;
    case "water":
        document.getElementById('room').innerHTML = parseFloat(document.getElementById('room').innerHTML)+1;
        break;
    }

    quantity = ( quantity || 1);
    var storageTable = document.getElementById("itemStorageTable").getElementsByTagName('tbody')[0];

    var rowTM = storageTable.insertRow(storageTable.rows.length);
    var ciTM = rowTM.insertCell(0); var iTM = document.createElement('img');
    iTM.src = 'style/objectives/'+objectiveItem+'.png'; iTM.width = 32; iTM.height = 32;
    ciTM.appendChild(iTM);

    var cdTM = rowTM.insertCell(1);
    var dTM = document.createTextNode( objectiveItem );
    cdTM.appendChild(dTM);

    var chTM = rowTM.insertCell(2);
    var hTM = document.createTextNode( quantity );
    chTM.appendChild(hTM);
}

module.exports = itemStorageHandler;