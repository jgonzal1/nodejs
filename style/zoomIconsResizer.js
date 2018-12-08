function zoomIconResizer() {
    global.map.on('zoomend', function() {
		const currentZoom = global.map.getZoom();
		if (currentZoom < 15) { // hide places
			if (global.map.hasLayer(layers)) { global.map.removeLayer(layers); }
			if (global.map.hasLayer(characters)) {
				const x = currentZoom*2; const y = x;        
				const resizeIcon = L.Icon.extend({
					options: { iconSize: [x, y] }
				});
				characters.setIcon(resizeIcon);
			}
		} else {
			if (global.map.hasLayer(layers) === false) { global.map.addLayer(layers); }
		}
    });
}

module.exports = zoomIconResizer;