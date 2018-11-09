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

const objectives = [
    biscuit,
	burger,
	chococookie,
	chocolate,
	cupcake,
	donut,
	fries,
	icecream,
	pizza,
	popcorn,
	potatoes,
	poti,
	taco,
];

const transports = [
    baloon,
    bike,
    bus,
    //car, 
    //moto,
    plane,
    //taxi,
    train,
    truck
];

function getEnemies() {
    return enemies;
}
function getObjectives() {
    return objectives;
}
function getTransports() {
    return transports;
}

module.exports.getEnemies    = getEnemies;
module.exports.getObjectives = getObjectives;
module.exports.getTransports = getTransports;