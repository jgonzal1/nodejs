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

module.exports = itemRoomHandler;