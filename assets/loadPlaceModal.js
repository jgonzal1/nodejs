const math = require("mathjs");

let playerComparer, coordsDiff, distancesArray, nearestObjective, nearestPlaceIndex, place;
const tradeMatrix = {};
/*tradeMatrix["goldSellPrice"] = 3900000;
tradeMatrix["goldBuyPrice"] = 4100000*/
function loadPlaceModal(sites, markers, callback) {
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
    if (document.getElementById("backpack").style.display === 'none') { // TODO !== + estando ahí
        /*if (nearestObjective < 0.0002) {
        } else {
            alert(
                '¡Tu objetivo más cercano aún está a ' + Math.round(5000*nearestObjective) + ' pasos y\n' +
                'es: ' + place + '!'
            );
        }*/
        var tradeTable = document.getElementById("tradeTable").getElementsByTagName('tbody')[0];
        switch (place) {
        case 'blockhouses':
            setTradingMaterialRow(tradeTable, 'buy', 'beer', 20, 100, 600);
            setTradingMaterialRow(tradeTable, 'change', 'fish', 3, 600, 4500);
            setTradingMaterialRow(tradeTable, 'buy', 'grain', 5, 40, 200);
            setTradingMaterialRow(tradeTable, 'change', 'salt', 2, 18, 300);
            setTradingMaterialRow(tradeTable, 'change', 'wool', 1, 800, 8000);
            setTradingMaterialRow(tradeTable, 'change', 'spices', 2, 300, 500); // Volumen: 50g (20v menos)
            document.getElementById('logs').innerText = place;
            break;
        case 'brewery':
            setTradingMaterialRow(tradeTable, 'sell', 'beer', 200, 100, 300);
            setTradingMaterialRow(tradeTable, 'buy', 'grain', 25, 40, 200);
            setTradingMaterialRow(tradeTable, 'sell', 'wine', 20, 100, 5000);
            setTradingMaterialRow(tradeTable, 'buy', 'wood', 500, 500, 1500);
            break;
        case 'brickbuilding':
            setTradingMaterialRow(tradeTable, 'sell', 'bricks', 500, 50, 150);
            break;
        case 'castle':
            setTradingMaterialRow(tradeTable, 'sell', 'beer', 200, 200, 600);
            setTradingMaterialRow(tradeTable, 'sell', 'bricks', 500, 100, 150);
            setTradingMaterialRow(tradeTable, 'sell', 'fish', 10, 600, 4500);
            // setTradingMaterialRow(tradeTable, 'change', 'gold', 1, 3900000, 4100000);
            setTradingMaterialRow(tradeTable, 'sell', 'grain', 25, 40, 200);
            setTradingMaterialRow(tradeTable, 'sell', 'meat', 15, 600, 3000);
            setTradingMaterialRow(tradeTable, 'sell', 'salt', 18, 18, 300);
            setTradingMaterialRow(tradeTable, 'change', 'wine', 20, 1000, 10000);
            setTradingMaterialRow(tradeTable, 'sell', 'wood', 500, 500, 1500);
            setTradingMaterialRow(tradeTable, 'sell', 'wool', 20, 800, 8000);
            setTradingMaterialRow(tradeTable, 'sell', 'spices', 10, 300, 500); // Volumen: 50g (20v menos)
            document.getElementById('logs').innerText = place;
            break;
        case 'cornshop':
            setTradingMaterialRow(tradeTable, 'sell', 'grain', 150, 35, 145);
            break;
        case 'house':
            setTradingMaterialRow(tradeTable, 'buy', 'beer', 20, 100, 600);
            setTradingMaterialRow(tradeTable, 'change', 'fish', 3, 600, 4500);
            setTradingMaterialRow(tradeTable, 'buy', 'grain', 5, 40, 200);
            setTradingMaterialRow(tradeTable, 'change', 'salt', 2, 18, 300);
            setTradingMaterialRow(tradeTable, 'buy', 'wine', 20, 1000, 10000);
            setTradingMaterialRow(tradeTable, 'change', 'wool', 1, 800, 8000);
            setTradingMaterialRow(tradeTable, 'change', 'spices', 2, 300, 500); // Volumen: 50g (20v menos)
            document.getElementById('logs').innerText = place;
            break;
        case 'store2':
            setTradingMaterialRow(tradeTable, 'sell', 'beer', 200, 200, 600);
            setTradingMaterialRow(tradeTable, 'sell', 'fish', 10, 550, 4000);
            setTradingMaterialRow(tradeTable, 'sell', 'grain', 25, 40, 200);
            setTradingMaterialRow(tradeTable, 'sell', 'meat', 25, 550, 2450);
            setTradingMaterialRow(tradeTable, 'sell', 'wine', 20, 1000, 10000);
            setTradingMaterialRow(tradeTable, 'sell', 'spices', 100, 300, 500); // Volumen: 50g (20v menos)
            document.getElementById('logs').innerText = place;
            break;
        case 'store3':
            setTradingMaterialRow(tradeTable, 'sell', 'beer', 200, 200, 600);
            setTradingMaterialRow(tradeTable, 'sell', 'fish', 10, 550, 4000);
            setTradingMaterialRow(tradeTable, 'sell', 'grain', 25, 40, 200);
            setTradingMaterialRow(tradeTable, 'sell', 'iron', 25, 40, 110);
            setTradingMaterialRow(tradeTable, 'sell', 'meat', 25, 550, 2450);
            setTradingMaterialRow(tradeTable, 'sell', 'wine', 20, 1000, 10000);
            setTradingMaterialRow(tradeTable, 'sell', 'spices', 100, 300, 500); // Volumen: 50g (20v menos)
            document.getElementById('logs').innerText = place;
            break;
        case 'tent':
            setTradingMaterialRow(tradeTable, 'buy', 'beer', 10, 200, 600);
            setTradingMaterialRow(tradeTable, 'buy', 'fish', 1, 550, 4000);
            setTradingMaterialRow(tradeTable, 'buy', 'grain', 2, 40, 200);
            setTradingMaterialRow(tradeTable, 'buy', 'meat', 1, 550, 2450);
            setTradingMaterialRow(tradeTable, 'buy', 'wine', 10, 1000, 10000);
            setTradingMaterialRow(tradeTable, 'buy', 'spices', 1, 300, 500); // Volumen: 50g (20v menos)
            document.getElementById('logs').innerText = place;
            break;
        case 'vending':
            setTradingMaterialRow(tradeTable, 'sell', 'beer', 30, 200, 600);
            setTradingMaterialRow(tradeTable, 'sell', 'fish', 10, 550, 4000);
            setTradingMaterialRow(tradeTable, 'sell', 'grain', 20, 40, 200);
            setTradingMaterialRow(tradeTable, 'sell', 'wool', 10, 800, 8000);
            setTradingMaterialRow(tradeTable, 'sell', 'spices', 50, 300, 500); // Volumen: 50g (20v menos)
            document.getElementById('logs').innerText = place;
            break;
        }/*
        case bank: // money (invest / recover after invest)
        case bank2: // money (take and give loans)
        case gasStation: // → tool/gasoline, tools
        case refinery: // → tool/gasoline
        case tent: // ← tools
        case vending: // ←→ wool, tools/compass, tools/gloves, tools/map2, spices, tools
            break;
        }*/
        document.getElementById('openModal').innerText = 'true';
        $("#tradeModal").modal("show");
        $(".navbar-collapse.in").collapse("hide");
        callback(nearestPlaceIndex);
    } else {
        alert('¡Necesitas una mochila para comerciar!');
    }
}
/** @typedef HTML.table @type {object} @type {HTML.table} */
/**
 * @param {HTML.table} tradeTable
 * @param {string} tradeType
 * @param {string} tradingMaterial
 * @param {number} quantity
 * @param {number} minPrice
 * @param {number} avgMaxPrice
 */
function setTradingMaterialRow(tradeTable, tradeType, tradingMaterial, quantity, minPrice, avgMaxPrice) {
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
    tradeMatrix[tradingMaterial+'Number'] = Math.round(Math.random()*quantity);
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
        if (tradeType === 'sell') {
            document.getElementById("tradeRange").min = 0;
        } else {
            document.getElementById("tradeRange").min = -1; //TODO user available
        }
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