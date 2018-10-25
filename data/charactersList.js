const enemies = [
    bloodyeye,
    death,
    mummy,
    owl,
    phantom,
    pirateskull,
    skeleton,
    spider,
    undeadhand,
    vampire
];
const transports = [
    bike,
    baloon,
    bus,
    plane,
    truck,
    train,
    car,
    taxi,
    moto	
];

function getEnemies() {
    return enemies;
}
function getTransports() {
    return transports;
}

module.exports.getEnemies = getEnemies;
module.exports.getTransports = getTransports;