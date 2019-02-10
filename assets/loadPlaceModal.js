const math = require("mathjs");
const getTradePrices = require('../data/tradePrices');
const tradePrices = getTradePrices();

let playerComparer, coordsDiff, distancesArray, nearestObjective, nearestPlaceIndex, place;
const tradeMatrix = {};

/*tradeMatrix["goldSellPrice"] = 3900000;
tradeMatrix["goldBuyPrice"] = 4100000*/
function loadPlaceModal(sites, markers, callback) {
    playerComparer = 
        math.zeros(1, sites.length).valueOf() .concat(
        math.multiply( math.ones( 1, sites.length ), global.player.getLatLng().lat ).valueOf() ,
        math.multiply( math.ones( 1, sites.length ), global.player.getLatLng().lng ).valueOf() )
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
    if (document.getElementById("storageMethod").innerText === "Backpack") {
        if (nearestObjective < 0.0004) {
            var tradeTable = document.getElementById("tradeTable").getElementsByTagName('tbody')[0];
            switch (place) {
            case 'blockhouses':
                setTradingMaterialRow(tradeTable, 'buy', 'beer', 20, 'Norml');
                setTradingMaterialRow(tradeTable, 'change', 'fish', 3, 'Delux');
                setTradingMaterialRow(tradeTable, 'buy', 'grain', 5, 'Delux');
                setTradingMaterialRow(tradeTable, 'change', 'salt', 2, 'Norml');
                setTradingMaterialRow(tradeTable, 'change', 'wool', 1, 'Norml');
                setTradingMaterialRow(tradeTable, 'change', 'spices', 2,'Norml'); // Volumen: 50g (20v menos)
                document.getElementById('logs').innerText = place;
                break;
            case 'brewery':
                setTradingMaterialRow(tradeTable, 'sell', 'beer', 200, 'Cheap');
                setTradingMaterialRow(tradeTable, 'buy', 'grain', 25, 'Delux');
                setTradingMaterialRow(tradeTable, 'sell', 'wine', 20, 'Cheap');
                setTradingMaterialRow(tradeTable, 'buy', 'wood', 500, 'Norml');
                break;
            case 'brickbuilding':
                setTradingMaterialRow(tradeTable, 'sell', 'bricks', 500, 'Cheap');
                break;
            case 'castle':
                setTradingMaterialRow(tradeTable, 'sell', 'beer', 200, 'Delux');
                setTradingMaterialRow(tradeTable, 'sell', 'bricks', 500, 'Norml');
                setTradingMaterialRow(tradeTable, 'sell', 'fish', 10, 'Delux');
                // setTradingMaterialRow(tradeTable, 'change', 'gold', 1, 'Norml');
                setTradingMaterialRow(tradeTable, 'sell', 'grain', 25, 'Delux');
                setTradingMaterialRow(tradeTable, 'sell', 'meat', 15, 'Delux');
                setTradingMaterialRow(tradeTable, 'sell', 'salt', 18, 'Norml');
                setTradingMaterialRow(tradeTable, 'change', 'wine', 20, 'Delux');
                setTradingMaterialRow(tradeTable, 'sell', 'wood', 500, 'Norml');
                setTradingMaterialRow(tradeTable, 'sell', 'wool', 20, 'Norml');
                setTradingMaterialRow(tradeTable, 'sell', 'spices', 10, 'Norml'); // Volumen: 50g (20v menos)
                document.getElementById('logs').innerText = place;
                break;
            case 'cornshop':
                setTradingMaterialRow(tradeTable, 'sell', 'grain', 150, 'Cheap');
                break;
            case 'house':
                setTradingMaterialRow(tradeTable, 'buy', 'beer', 20, 'Norml');
                setTradingMaterialRow(tradeTable, 'change', 'fish', 3, 'Delux');
                setTradingMaterialRow(tradeTable, 'buy', 'grain', 5, 'Delux');
                setTradingMaterialRow(tradeTable, 'change', 'salt', 2, 'Norml');
                setTradingMaterialRow(tradeTable, 'buy', 'wine', 20, 'Norml');
                setTradingMaterialRow(tradeTable, 'change', 'wool', 1, 'Norml');
                setTradingMaterialRow(tradeTable, 'change', 'spices', 2, 'Norml'); // Volumen: 50g (20v menos)
                document.getElementById('logs').innerText = place;
                break;
            case 'store2':
                setTradingMaterialRow(tradeTable, 'sell', 'beer', 200, 'Norml');
                setTradingMaterialRow(tradeTable, 'sell', 'fish', 10, 'Cheap');
                setTradingMaterialRow(tradeTable, 'sell', 'grain', 25, 'Delux');
                setTradingMaterialRow(tradeTable, 'sell', 'meat', 25, 'Cheap');
                setTradingMaterialRow(tradeTable, 'sell', 'wine', 20, 'Norml');
                setTradingMaterialRow(tradeTable, 'sell', 'spices', 100, 'Norml');
                document.getElementById('logs').innerText = place;
                break;
            case 'store3':
                setTradingMaterialRow(tradeTable, 'sell', 'beer', 200, 'Norml');
                setTradingMaterialRow(tradeTable, 'sell', 'fish', 10, 'Cheap');
                setTradingMaterialRow(tradeTable, 'sell', 'grain', 25, 'Delux');
                setTradingMaterialRow(tradeTable, 'sell', 'iron', 25, 'Norml');
                setTradingMaterialRow(tradeTable, 'sell', 'meat', 25, 'Cheap');
                setTradingMaterialRow(tradeTable, 'sell', 'wine', 20, 'Norml');
                setTradingMaterialRow(tradeTable, 'sell', 'spices', 100, 'Norml');
                document.getElementById('logs').innerText = place;
                break;
            case 'tent':
                setTradingMaterialRow(tradeTable, 'buy', 'beer', 10, 'Delux');
                setTradingMaterialRow(tradeTable, 'buy', 'fish', 1, 'Norml');
                setTradingMaterialRow(tradeTable, 'buy', 'grain', 2, 'Delux');
                setTradingMaterialRow(tradeTable, 'buy', 'meat', 1, 'Cheap');
                setTradingMaterialRow(tradeTable, 'buy', 'wine', 10, 'Norml');
                setTradingMaterialRow(tradeTable, 'buy', 'spices', 1, 'Cheap');
                document.getElementById('logs').innerText = place;
                break;
            case 'vending':
                setTradingMaterialRow(tradeTable, 'sell', 'beer', 30, 'Norml');
                setTradingMaterialRow(tradeTable, 'sell', 'fish', 10, 'Cheap');
                setTradingMaterialRow(tradeTable, 'sell', 'grain', 20, 'Delux');
                setTradingMaterialRow(tradeTable, 'sell', 'wool', 10, 'Norml');
                setTradingMaterialRow(tradeTable, 'sell', 'spices', 50, 'Norml');
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
            alert(
                '¡Tu objetivo más cercano aún está a ' + Math.round(5000*nearestObjective) + ' pasos y\n' +
                'es: ' + place + '!'
            );
        }
    } else {
        alert('¡Necesitas una mochila para comerciar!');
    }
}

/** @typedef HTML.table @type {object} @type {HTML.table} */
/**
 * @param {HTML.table} tradeTable
 * document.getElementById("tradeTable").getElementsByTagName('tbody')[0];
 * @param {string} tradeType 'buy' | 'change' | 'sell'
 * @param {string} tradingMaterial
 * 'beer' | 'bricks' | 'fish'   | 'gold' | 'grain' | 'iron' |
 * 'meat' | 'salt'   | 'spices' | 'wine' | 'wood'  | 'wool
 * @param {number} quantity
 * @param {string} price 'Delux' | 'Cheap' | 'Norml'
 */
function setTradingMaterialRow(tradeTable, tradeType, tradingMaterial, quantity, price) {
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
    var pTM = Math.round(
        tradePrices[tradingMaterial+price][0] +
        Math.random()*tradePrices[tradingMaterial+price][1]
    );
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
            document.getElementById("tradeRange").min = -1;
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