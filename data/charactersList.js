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
	"healthpotion",
	"knife",
	"pizza",
	"rice",
	"steelaxe",
	"sword",
	"water"
];

var transports = [
    "balloon",
    "bike",
    "bus",
    //"car", 
    //"moto",
    "taxi",
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