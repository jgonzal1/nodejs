const lngCorrector = require('../data/lngCorrector');
const lngCorrectionArr = lngCorrector();
const createIcon = require('../style/createIcon');
const createBattlerIcon = require('../style/createBattlerIcon');
const cercania = 30; // 70 online

/**
 * @param {string} name 
 * @param {L.icon} enemyIcon 
 */
function spawnEnemy(name, enemyIcon) {
    const lngCorrection = lngCorrectionArr[Math.round(lat)];
    do {
        latRnd = (Math.random()-0.5)/cercania;
    } while (Math.abs(latRnd) < 0.0004*lngCorrection);
    do {
        longRnd = (Math.random()-0.5)/cercania;
    } while (Math.abs(longRnd) < 0.0004);

    return L.marker(
        [lat+latRnd*lngCorrection, long+longRnd],
        {title: name + ' (Enemigo)', attribution: name, icon: enemyIcon}
    )
    //.bindPopup('<color="red"><b>Enemigo</b></color>')
    ;
}

/** @typedef L.icon @type {object} @type {L.icon} */
function spawnEnemies() {
    const bloodyeyeIcon        = L.icon(createIcon('sprites/map-enemies/bloodyeye.png'));
    const deathIcon            = L.icon(createBattlerIcon('sprites/map-enemies/death.png'));
    const draculaIcon        = L.icon(createBattlerIcon('sprites/map-enemies/dracula.png'));
    const empire1Icon        = L.icon(createBattlerIcon('sprites/map-enemies/empire1.png'));
    const empire2Icon        = L.icon(createBattlerIcon('sprites/map-enemies/empire2.png'));
    const gollumIcon        = L.icon(createBattlerIcon('sprites/map-enemies/gollum.png'));
    const jabbaIcon            = L.icon(createBattlerIcon('sprites/map-enemies/jabba.png'));
    const jokerIcon            = L.icon(createBattlerIcon('sprites/map-enemies/joker.png'));
    const mummyIcon            = L.icon(createBattlerIcon('sprites/map-enemies/mummy.png'));
    const owlIcon            = L.icon(createIcon('sprites/map-enemies/owl.png'));
    const phantomIcon        = L.icon(createBattlerIcon('sprites/map-enemies/phantom.png'));
    const pirateskullIcon    = L.icon(createIcon('sprites/map-enemies/pirateskull.png'));
    const skeletonIcon        = L.icon(createBattlerIcon('sprites/map-enemies/skeleton.png'));
    const spiderIcon        = L.icon(createBattlerIcon('sprites/map-enemies/spider.png'));
    const undeadhandIcon    = L.icon(createIcon('sprites/map-enemies/undeadhand.png'));
    const vampireIcon        = L.icon(createIcon('sprites/map-enemies/vampire.png'));

    //global.bloodyeye    = spawnEnemy('bloodyeye', bloodyeyeIcon); // 'Ojo sangriento'
    global.death        = spawnEnemy('death', deathIcon); // 'Reaper'
    global.dracula        = spawnEnemy('dracula', draculaIcon); // ''
    global.empire1        = spawnEnemy('empire1', empire1Icon); // ''
    global.empire2        = spawnEnemy('empire2', empire2Icon); // ''
    global.gollum        = spawnEnemy('gollum', gollumIcon); // ''
    global.jabba        = spawnEnemy('jabba', jabbaIcon); // ''
    global.joker        = spawnEnemy('joker', jokerIcon); // ''
    global.mummy        = spawnEnemy('mummy', mummyIcon); // 'Momia'
    //global.owl        = spawnEnemy('owl', owlIcon); // 'Búho'
    global.phantom        = spawnEnemy('phantom', phantomIcon); // 'Fantasma'
    //global.pirateskull= spawnEnemy('pirateskull', pirateskullIcon); // 'Esqueleto pirata'
    global.skeleton        = spawnEnemy('skeleton', skeletonIcon); // 'Esqueleto'
    global.spider        = spawnEnemy('spider', spiderIcon); // 'Araña'
    //global.undeadhand    = spawnEnemy('undeadhand', undeadhandIcon); // 'Mano cercenada'
    //global.vampire        = spawnEnemy('vampire', vampireIcon); // 'Murciélago'
}

module.exports = spawnEnemies;