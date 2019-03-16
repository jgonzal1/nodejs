const itemStorageHandler = require("./itemStorageHandler");

function tradeCurrentQuantity() {
    document.getElementById("tradeResultLog").innerText = "Ejecutando tradeCurrentQuantity";
    /** @returns 'Buy' || 'Sell'*/
    const tradeSelectionType = document.getElementById("tradeSelectionType").innerText;
    const tradeSelectionN = parseFloat(document.getElementById("tradeSelectionN").innerText);
    /** @returns 'beer' | 'bricks' | 'fish' | 'gold' | 'grain' | 'iron' |
      * 'meat' | 'salt' | 'spices' | 'wine' | 'wood' | 'wool */
    const tradeSelection = document.getElementById("tradeSelection").innerText;
    if (
      document.getElementById('availableRoom').innerHTML == "true" &&
      tradeSelectionType === "Buy"
    ) {
      //itemRoomHandler(tradeSelection, true);
      var storageTable = document.getElementById("itemStorageTable").getElementsByTagName('tbody')[0];
  
      if (document.getElementById(tradeSelection+"Stack")==null) {
          alert("tradeSelection en itemStorageHandler " + tradeSelection);
          
          var rowTM = storageTable.insertRow(storageTable.rows.length);
          rowTM.id = tradeSelection+"Stack";
          var ciTM = rowTM.insertCell(0); var iTM = document.createElement('img');
          iTM.src = 'style/'+'trading_materials'+'/'+tradeSelection+'.png'; iTM.width = 32; iTM.height = 32;
          ciTM.appendChild(iTM);
          var cdTM = rowTM.insertCell(1);
          var dTM = document.createTextNode( tradeSelection );
          dTM.id = tradeSelection+"Name";
          cdTM.appendChild(dTM);
          var chTM = rowTM.insertCell(2);
          chTM.id = tradeSelection+"Quantity";
          var hTM = document.createTextNode( tradeSelectionN );
          chTM.appendChild(hTM);
  
          rowTM.addEventListener("click", function() {
              var item = document.getElementById(tradeSelection+"Stack");
              //objectiveStatsHandler(tradeSelection);
              //itemRoomHandler(tradeSelection, false);
              if (document.getElementById(tradeSelection+"Quantity")==null) { //should never be
                  item.parentNode.removeChild(item);
              } else {
                  if (parseFloat(document.getElementById(tradeSelection+"Quantity").innerHTML) < 2) {
                      item.parentNode.removeChild(item);
                  }
                  document.getElementById(tradeSelection+"Quantity").innerHTML = parseFloat(document.getElementById(tradeSelection+"Quantity").innerHTML)-1;
              }
          }, false);
      } else {
          document.getElementById(tradeSelection+"Quantity").innerHTML = parseFloat(document.getElementById(tradeSelection+"Quantity").innerHTML)+1;
      }
      if (
          document.getElementById('storageMethod').innerHTML == "Bare hands" ||
          parseFloat(document.getElementById('room').innerHTML) >= 7
      ) {
          document.getElementById('availableRoom').innerHTML = "false";
      }
  }
}

module.exports = tradeCurrentQuantity;