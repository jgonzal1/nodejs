const math = require("mathjs");

let playerComparer, coordsDiff, distancesArray, nearestObjective, nearestPlaceIndex, place;
let tradeMatrix = {};
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
        case 'blockhouses': // → beer, fish, grain, salt, wool, spices ← grain, salt (style/trading_materials/)
        default:
            var tradeTable = document.getElementById("tradeTable").getElementsByTagName('tbody')[0];
            var rowBeer = tradeTable.insertRow(tradeTable.rows.length);
            /*
            Cell(c)
            >Resource(i)
            >Quantity here(h)
            Price(p)
            >Sell Price(s)
            >Trade(t)
            >Buy Price(b)
            Quantity owned(o)*/
            var ciBeer = rowBeer.insertCell(0); var iBeer = document.createElement('img');
            iBeer.src = 'style/trading_materials/beer.png'; iBeer.width = 32; iBeer.height = 32;
            ciBeer.appendChild(iBeer);

            var chBeer = rowBeer.insertCell(1);
            tradeMatrix["nBeer"] = Math.round(Math.random()*20);
            var hBeer = document.createTextNode( tradeMatrix["nBeer"] );
            chBeer.appendChild(hBeer);

            var csBeer = rowBeer.insertCell(2);
            var pBeer = Math.round(100 + Math.random()*600);
            tradeMatrix["pSellBeer"] = Math.round( pBeer/(2+Math.random()) )/100;
            tradeMatrix["pBuyBeer"] = Math.round(pBeer)/100;
            var sBeer = document.createTextNode( tradeMatrix["pSellBeer"] );
            csBeer.appendChild(sBeer);

            var ctBeer = rowBeer.insertCell(3); var tBeer = document.createElement('button');
            tBeer.addEventListener("click", showSlide, false);
            var tBeerText = document.createTextNode("Trade");
            tBeer.appendChild(tBeerText);
            ctBeer.appendChild(tBeer);

            var cbBeer = rowBeer.insertCell(4);
            var bBeer = document.createTextNode( tradeMatrix["pBuyBeer"] );
            cbBeer.appendChild(bBeer);

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
        //document.getElementById('tradeSelection').innerText
    } else {
        alert(
            '¡Tu objetivo más cercano aún está a ' + Math.round(5000*nearestObjective) + ' pasos y\n' +
            'es: ' + place + '!'
        );
    }
}
function showSlide() {
    document.getElementById("tradeSlider").style.display = "inline";
    document.getElementById("tradeRange").min = 0;
    document.getElementById("tradeRange").max = tradeMatrix["nBeer"];
    document.getElementById("tradeSelection").style.display = "inline";
}

module.exports = loadPlaceModal;