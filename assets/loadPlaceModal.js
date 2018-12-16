const math = require("mathjs");

let playerComparer, coordsDiff, distancesArray, nearestObjective, nearestPlaceIndex, place;
function loadPlaceModal(sites, markers) {
    playerComparer = 
        math.zeros(1, sites.length).valueOf() .concat(
        math.multiply( math.ones( 1,  sites.length ), global.player.getLatLng().lat ).valueOf() ,
        math.multiply( math.ones( 1,  sites.length ), global.player.getLatLng().lng ).valueOf() )
    ;
    coordsDiff =
        math.abs( math.subtract(
            math.transpose( math.matrix(sites) ), // [1] lat, [2] lng;
            playerComparer
        ) ).valueOf()
    ;
    distancesArray = math.add(coordsDiff[1],coordsDiff[2]);
    nearestObjective = Math.min(...distancesArray);
    nearestPlaceIndex = distancesArray.indexOf(Math.min(...distancesArray));
    place = markers[nearestPlaceIndex].getPopup().getContent();
    //document.getElementById('currentPlace').innerText = place;
    // document.getElementById('logs').innerText = Math.round(Math.random()*100).toString() + ' ' ;
    if (true) {
        switch (place) {
        default:
            var tradeTable = document.getElementById("tradeTable").getElementsByTagName('tbody')[0];
            var rBeer = tradeTable.insertRow(tradeTable.rows.length);
            /*Resource
            Quantity here
            Sell Price
            Trade
            Buy Price
            Quantity owned*/
            var newCell = rBeer.insertCell(0);
            var img  = document.createElement('img');
            img.src='style/trading_materials/beer.png';img.width=32;img.height=32;
            newCell.appendChild(img);

            var newCell2  = rBeer.insertCell(1);
            // Append a text node to the cell
            var newText2  = document.createTextNode('New rc');
            newCell2.appendChild(newText2);

            document.getElementById('logs').innerText = place;
            /*tableBody.innerHTML = document.createTextNode(
            '&lt;tr&gt;'+
                '<th scope="row">img1</th>'+
                '<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td>'+
            '</tr><tr>'+
                '<th scope="row">img2</th>'+
                '<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td>'+
            '&lt;/tr&gt;'
            );*/
            break;
        }/*
        case bank: // money (invest / recover after invest)
            break;
        case bank2: // money (take and give loans)
        case blockhouses:
            // → beer, fish, grain, salt, wool, spices
            // ← grain, salt (style/trading_materials/)
            break;
        case castle:
            // → beer, bricks, fish, gold, meat, salt, wine, wood, wool, spices
            // ← gold, wine
            break;
        case brewery:
            // → grain, wood
            // ← beer, wine
            break;
        case cornshop: // → grain
        case gasStation: // → tool/gasoline, tools
        case house:
            // → beer, fish, grain, salt, wine, wool, spices
            // ← grain, salt, wool, spices
            break;
        case refinery: // → tool/gasoline
        case brickbuilding: // → bricks
        case store2: // → beer, fish, grain, meat, wine, spices
        case store3: // → beer, fish, grain, iron, meat, wine, spices
        case tent:
            // → beer, fish, grain, meat, wine, spices
            // ← tools
            break;
        case vending: // ←→ wool, tools/compass, tools/gloves, tools/map2, beer, fish, spices, grain, tools
            break;
        }*/
        document.getElementById('openModal').innerText = 'true';
        $("#tradeModal").modal("show");
        $(".navbar-collapse.in").collapse("hide");
    }
    if (nearestObjective < 0.0002) {
            //document.getElementById('tradeOptionRow').innerHTML
            //document.getElementById('tradeSelection').innerText
    } else {
        alert(
            '¡Tu objetivo más cercano aún está a ' + Math.round(5000*nearestObjective) + ' pasos y\n' +
            'es: ' + place + '!'
        );
    }
}

module.exports = loadPlaceModal;