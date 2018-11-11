var enemies = [
    "bloodyeye",
    "death",
    "mummy",
    "owl",
    "phantom",
    "pirateskull",
    "skeleton",
    "spider",
    "undeadhand",
    "vampire"
];

var objectives = [
    "backpack",
	"burger",
	"banana",
	"blackberry",
	"boots",
	"chicken",
	"greenflask",
	"knife",
	"pizza",
	"rice",
	"steelaxe",
	"sword",
	"water"
];

var transports = [
    "balloon",
    "boat",
    "bus",
    //"car", 
    //"moto",
    "plane",
    //"taxi",
    "train",
    "truck"
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