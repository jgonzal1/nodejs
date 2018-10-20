/** @typedef Leaflet @type {object} @type {Leaflet} */
/** @param {string} videoUrl 
 * @param {Leaflet} L 
 */
function insertVideo(videoUrl, L) {
    videoUrl = ( videoUrl || 'https://www.mapbox.com/bites/00188/patricia_nasa.webm')
    videoBounds = [[ 32, -130], [ 13, -100]]; // USA
    L.videoOverlay(videoUrl, videoBounds ).addTo(map);
}
    