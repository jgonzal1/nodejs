const math = require("mathjs");

let playerComparer, coordsDiff, distancesArray, nearestObjective, nearestPlaceIndex, place;
const tradeMatrix = {};
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
    // if (true) {
    switch (place) {
        case 'blockhouses': // → beer, fish, grain, salt, wool, spices ← grain, salt
        default:
            var tradeTable = document.getElementById("tradeTable").getElementsByTagName('tbody')[0];
            setTradingMaterialRow(tradeTable, 'beer', 100, 600);
            setTradingMaterialRow(tradeTable, 'fish', 600, 4500);
            setTradingMaterialRow(tradeTable, 'grain', 40, 200);
            setTradingMaterialRow(tradeTable, 'salt', 18, 300);
            setTradingMaterialRow(tradeTable, 'wool', 800, 8000);
            setTradingMaterialRow(tradeTable, 'spices', 300, 500); // Volumen: 50g (20v menos)
            document.getElementById('logs').innerText = place;
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
    //}
    if (nearestObjective < 0.0002) {
    } else {
        alert(
            '¡Tu objetivo más cercano aún está a ' + Math.round(5000*nearestObjective) + ' pasos y\n' +
            'es: ' + place + '!'
        );
    }
}
function setTradingMaterialRow(tradeTable, tradingMaterial, minPrice, avgMaxPrice) {
    /*Cell(c)
    >Resource(i)
    >Quantity here(h)
    Price(p)
    >Sell Price(s)
    >Trade(t)
    >Buy Price(b)
    Quantity owned(o)*/
    var rowTM = tradeTable.insertRow(tradeTable.rows.length);
    var ciTM = rowTM.insertCell(0); var iTM = document.createElement('img');
    iTM.src = 'style/trading_materials/'+tradingMaterial+'.png'; iTM.width = 32; iTM.height = 32;
    ciTM.appendChild(iTM);

    var chTM = rowTM.insertCell(1);
    tradeMatrix[tradingMaterial+'Number'] = Math.round(Math.random()*20);
    var hTM = document.createTextNode( tradeMatrix[tradingMaterial+'Number'] );
    chTM.appendChild(hTM);

    var csTM = rowTM.insertCell(2);
    var pTM = Math.round(minPrice + Math.random()*avgMaxPrice);
    tradeMatrix[tradingMaterial+"SellPrice"] = Math.round( pTM/(2+Math.random()) )/100;
    tradeMatrix[tradingMaterial+"BuyPrice"] = Math.round(pTM)/100;
    var sTM = document.createTextNode( tradeMatrix[tradingMaterial+"SellPrice"] );
    csTM.appendChild(sTM);

    var ctTM = rowTM.insertCell(3); var tTM = document.createElement('button');

    tTM.addEventListener("click", function(){
        document.getElementById("tradeSlider").style.display = "inline";
        document.getElementById("tradeRange").min = 0;
        document.getElementById("tradeRange").max = tradeMatrix[tradingMaterial+'Number'];
        document.getElementById("tradeSelectionN").style.display = "inline";
        document.getElementById("tradeSelection").innerText = tradingMaterial;        
    }, false);
    var tTMText = document.createTextNode("Trade");
    tTM.appendChild(tTMText);
    ctTM.appendChild(tTM);

    var cbTM = rowTM.insertCell(4);
    var bTM = document.createTextNode( tradeMatrix[tradingMaterial+"BuyPrice"] );
    cbTM.appendChild(bTM);

    var coTM = rowTM.insertCell(5);
    var oTM = document.createTextNode( 0 );
    coTM.appendChild(oTM);
}

module.exports = loadPlaceModal;