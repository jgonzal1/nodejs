// Initialize leaflet.js
var leaflet = require('leaflet');

// Initialize the map
var map = leaflet.map('map', {
  scrollWheelZoom: false
});

// Set the position and zoom level of the map
map.setView([40.4942011, -3.7101309], 13);

// Initialize the base layer
var osm_mapnik = leaflet.tileLayer(
    'http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
    //'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        attribution: '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }
).addTo(map);
