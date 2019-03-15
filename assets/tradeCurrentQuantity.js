function tradeCurrentQuantity() {
    document.getElementById("tradeResultLog").innerText = "Ejecutando tradeCurrentQuantity";
    /** @returns 'Buy' || 'Sell'*/
    const tradeSelectionType = document.getElementById("tradeSelectionType").innerText;
    const tradeSelectionN = parseFloat(document.getElementById("tradeSelectionN").innerText);
    /** @returns 'beer' | 'bricks' | 'fish' | 'gold' | 'grain' | 'iron' |
      * 'meat' | 'salt' | 'spices' | 'wine' | 'wood' | 'wool */
    const tradeSelection = document.getElementById("tradeSelection").innerText;

}

module.exports = tradeCurrentQuantity;