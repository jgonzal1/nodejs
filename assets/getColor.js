function getColor(latlng) {
    var size = global.artisticMap.getTileSize();
    var point = global.artisticMap._map.project(latlng, global.artisticMap._tileZoom).floor();
    var coords = point.unscaleBy(size).floor();
    var offset = point.subtract(coords.scaleBy(size));
    coords.z = global.artisticMap._tileZoom;
    var tile = global.artisticMap._tiles[global.artisticMap._tileCoordsToKey(coords)];
    if (!tile || !tile.loaded) { return null; }
    try {
        var colorSniffer = document.getElementById("floorColorSniffCanvas");
        var contextSniffer = colorSniffer.getContext('2d');
        // tile.el.crossOrigin = "Anonymous";        
        contextSniffer.drawImage(tile.el, -offset.x, -offset.y, size.x, size.y);
        var a = contextSniffer.getImageData(8, 8, 1, 1).data; // 0, 0, 1, 1
        var hex = "#" + (0x1000000 + (a[0] << 16) + (a[1] << 8) + a[2]).toString(16).substr(1);
        var tmpl = "<b style='background:@;color:black;'>@</b>";
        if (Math.min(a[0], a[1], a[2]) < 0x40)
        {
            tmpl = tmpl.replace("black", "white");
        }
        /*map.attributionControl.setPrefix*/alert(tmpl.replace(/@/g, hex));
    } catch (e) {
        alert("Color unavailable");        
        return e;
    }
}

module.exports = getColor;