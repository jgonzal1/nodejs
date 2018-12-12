var keypressMap = {
"activateMutations":[123],
"build":[42,66,98],
"chatMenu":[67],
"close":[99],
"compare":[73],
"controlVehicle":[94],
"craft":[38],
"debugModal":[126],
"developerSwitch":[89,121],
"disassembly":[40],
"examine":[88,120],
"exit":[27],
"factions":[35],
"fireMode":[70],
"fleet":[102],
"get":[103],
"grabVehicle":[71],
"help":[63,72,104],
"ignoreRearestEnemy":[39],
"inventory":[105],
"journal":[74,106],
"kick":[75,107],
"killCount":[41],
"leaveItem":[76,108],
"listOfActions":[37],
"manageInventory":[47],
"moveEast":[54,68,100],
"moveNE":[57],
"moveNW":[55],
"moveNorth":[56,87,119],
"moveSE":[51],
"moveSouth":[50,83,115],
"moveSW":[49],
"moveWest":[52,65,97],
"music":[77,109],
"no":[78,110],
"open":[79],
"options":[111],
"pause":[44,46,53,80,112],
"pickOrSearchNearest":[32],
"playerInfo":[64],
"quests":[81,113],
"read":[114],
"recraftLast":[45],
"reload":[114],
"research":[82],
"run":[34],
"safemode":[33],
"sleep":[36],
"swapInventoryLetters":[61],
"takeOut":[116],
"toggleStats":[122],
"treatmentsModal":[84],
"unArm":[95],
"unWield":[85],
"use":[117],
"vehicleHandbrake":[86],
"viewMorale":[118],
"waitLong":[124],
"wear":[43],
"wield":[69,101]
};

var keymap = {
    "activateMutations":["{"],
    "addMission":["~M"],
    "bionics":["Shift+B"],
    "build":["*","B","b"],
    "changeSkills":["~A"],
    "changeWeather":["~h"],
    "chatMenu":["C"],
    "close":["c"],
    "compare":["I"],
    "controlVehicle":["^"],
    "craft":["&"],
    "craftIndefinedly":["Shift+C"],
    "customizeKeymap":["?1"],
    "debugModal":["~"],
    "deleteAllItems":["~D"],
    "developerSwitch":["y"],
    "disassembly":["("],
    "editCharacter":["~d"],
    "editMap":["~g","~m"],
    "editStats":["~T"],
    "examine":["X","x"],
    "exit":["ESC"],
    "factions":["#"],
    "fireMode":["F"],
    "fireWielded":["Shift+F"],
    "fleet":["f"],
    "gameState":["~7"],
    "get":["g"],
    "goToSpawn":["Shift+G"],
    "grabVehicle":["G"],
    "help":["?","H","h"],
    "ignoreRearestEnemy":["'"],
    "inventory":["i"],
    "journal":["J","j"],
    "keys":["Shift+K"],
    "kick":["k"],
    "killAllNearby":["~K"],
    "killCount":[")"],
    "killNpcs":["~8"],
    "leaveItem":["l"],
    "listEnemies":["Shift+V"],
    "listOfActions":["%"],
    "login":["Shift+L"],
    "manageInventory":["/"],
    "moveEast":["6","D","d"],
    "moveMapViewDown":["DOWN"],
    "moveMapViewLeft":["LEFT"],
    "moveMapViewRight":["RIGH"],
    "moveMapViewUp":["UP"],
    "moveNE":["9"],
    "moveNW":["7"],
    "moveNorth":["8","W","w"],
    "moveSE":["3"],
    "moveSW":["1"],
    "moveSouth":["2","S","s"],
    "moveWest":["4","A","a"],
    "music":["M","m"],
    "mutate":["~u"],
    "no":["n"],
    "open":["O"],
    "options":["o"],
    "pause":[".",",","5","P","p"],
    "pickOrSearchNearest":[" "],
    "playerInfo":["@"],
    "quitGame":["Q"],
    "read":["r"],
    "reload":["R"],
    "recraftLast":["-"],
    "research":["r"],
    "routePlanner":["~r"],
    "run":["\""],
    "saveQuit":["Ctrl+S"],
    "scents":["~p"],
    "searchItem":["~1"],
    "seeWeather":["~o"],
    "setHealth":["~H"],
    "setNeeds":["~n"],
    "setRandomClass":["~c"],
    "setTime":["~t"],
    "skills":["~S"],
    "sleep":["$"],
    "sorceries":["Shift+S"],
    "sounds":["~s"],
    "spawnEnemy":["~5","~6"],
    "spawnPlace":["~E"],
    "spawnVehicle":["~0"],
    "statusWindow":["~@"],
    "swapInventoryLetters":["="],
    "takeOut":["t"],
    "teleport":["~e"],
    "teleportLong":["~3"],
    "teleportShort":["~2"],
    "testItems":["~k"],
    "toggleSafemode":["!"],
    "toggleStats":["z"],
    "treatmentsModal":["T"],
    "unArm":["_"],
    "unWield":["U"],
    "unlockAllMeleeAttacks":["~B"],
    "unlockAllRecipes":["~C"],
    "use":["u"],
    "vehicleHandbrake":["V"],
    "viewMessages":["Shift+M"],
    "viewMorale":["v"],
    "viewMutations":["~m"],
    "waitLong":["|"],
    "wear":["+"],
    "wearWield":["~w","E","e"]
};

function getKeypressMap() {
    return keypressMap;
}
function getKeymap() {
    return keymap;
}

module.exports.getKeypressMap = getKeypressMap;
module.exports.getKeymap = getKeymap;

/*
keyEventWhich	keyFunction	description
_	unArm	Select unarmed style [Hint]
-	recraftLast	Re-craft last recipe
!	Toggle Safemode	
?1	customizeKeymap	To revert back to defaults the personalized-keymap.csv key bindings just delete it.
,	pause	Comma used to PickingUpItems; Twice Selects/Deselect all items [Hint]
(	disassembly	Disassemble items
@	playerInfo	Open Character Status screen for Controlling Skills. TAB to navigate, enter to toggle activation
*	build	Construct terrain
/	manageInventory	Advanced inventory management [Hint]
%	listOfActions	Access list of actions [Hint]
^	controlVehicle	Control vehicle [Hint]
+	wear	Re-layer armour/clothing [Hint]
=	swapInventoryLetters	Swap inventory letters [Hint]
|	waitLong	Wait for several minutes [Hint]
~	debugModal	It will allow you to see things like the age/damage/freshness values of various items. Debug keys usage is essentially CHEATING; unless you are in a situation caused by bugs (e.g. spawning in a windowless doorless room) or testing game features.
~@	statusWindow	Shows the status window. Same window as the normal @ would show.
~0	spawnVehicle	Spawn vehicle from the list.
~1	searchItem	then press up and down to cycle through searches, or number for amounts; Hitting enter will exit search; q exits.
~2	teleportShort	Select a location in sight to move to.
~3	teleportLong	Asks to what map square you want to move to; then places you randomly in the selected map square.
~5	spawnEnemy	Spawns random NPC nearby.
~6	spawnEnemy	It works the same as item wishing for the most part; pressing f will let you make the monster friendly if you want. After making your selection; move the cursor to pick a location to place the monster.
~7	gameState	Shows game state; planned events; active monsters; and active NPCs and locations of these NPCs. And your location.
~8	killNpcs	Kill NPCs - Kills all NPCs
~A	changeSkills	Allows you to increase and decrease skill values using a menu.
~B	unlockAllMeleeAttacks	Unlocks all melee styles; including a debug one.
~c	setRandomClass	Select a new NPC class to the nearest; and randomizes the NPC given this class. Creates new name and items.
~C	unlockAllRecipes	Unlocks all recipes; including unlearnable recipes.
~d	editCharacter	Allows you to edit the player or NPCs. See below for options.
~D	deleteAllItems	Deletes all items and clothing on the character.
~e	teleport	Performs short range teleport; like debug feature above.
~E	spawnPlace	Creates natural artifact and forms anomaly around it.
~g	editMap	Opens map editor; use q to cancel.
~H	setHealth	Set the hitpoints on a bodypart. Can go over and under natural limits.
~h	changeWeather	Select a new weather to start.
~k	testItems	Tests item groups; this submenu is only quitable by selecting the 'cancel' option.
~K	killAllNearby	Kills all active monsters. Processes their death effect as normal.
~M	addMission	Adds a possible mission to the nearest NPC. NPC's can have multiple missions; this mission is probably added to the end of the possible mission list.
~m	editMap	Allows you to edit the overmap. Locations in red will not be changed. Follow on screen instructions.
~m	viewMutations	Shows the levels of the various threshold mutations.
~n	Set needs	Allows you to see and edit the Hunger; Thirst; Fatigue and Vitamins levels of the NPC/player.
~r	routePlanner	Moves player to selected location; by walking normally.
~S	skills	Allows editing of the NPC; or player skills
~t	setTime	Change the current year; season; day; hour; minute; and amount of turns.
~T	Edit Stats	Edit the player or NPC maximum stats.
~u	mutate	Edits mutations/traits of the NPC/player using the same interface as the previous menu.
~w	Wear/Wield	Selects item to (un)wear/(un)wield an item from NPC/Player's inventory
$	sleep	Sleep [Hint]
B	build	ex-Butcher a corpse [Hint]
b	build	ex-Butcher a corpse [Hint]
C	chatMenu	Menu for Talking to NPC's or Yelling. Chat with an NPC [Hint]
c	close	Close door or window [Hint]
Ctrl+S	saveQuit	Save and quit [Hint]
e	wield	Wield item [Hint]. If you previously selected a martial arts style through _ it'll revert to that MA style instead. The currently wielded item will be automatically placed in your inventory or you'll be asked if you want to drop it if there's no space left.
E	wield	Wield item [Hint]. If you previously selected a martial arts style through _ it'll revert to that MA style instead. The currently wielded item will be automatically placed in your inventory or you'll be asked if you want to drop it if there's no space left.
ESC	exit	Exit dialog or screen / Cancel
F	fireMode	Toggle attack mode of wielded item [Hint]. Fire wielded item [Hint]
G	grabVehicle	Grab a nearby vehicle / Release vehicle [Hint]
g	get	Pick item(s) up [Hint]
I	compare	Compare two items [Hint]
j	journal	missions
J	journal	missions
k	kick	Smash nearby object
l	leaveItem	Drop item [Hint]. Items to adjacent tile [Hint] also displays the inventory screen.Type the number of items you want to drop. Press again the key of the inventory item you want to divide (in some cases; this will cause the item letter to be displayed as #). Press RETURN. Mounted turrets from vehicle mods are reloaded using either of the [D]rop commands.
O	open	Open door or window [Hint]
Q	quitGame	Commit suicide [Hint]
R	read,reload	Read a book or a magazine [Hint],Reload wielded item [Hint]
Shift+B	bionics	View/Activate bionics
Shift+C	craftIndefinedly	Craft for as long as possible
Shift+F	fireWielded	Burst-fire wielded item [Hint]
Shift+M	viewMessages	View message log
Shift+V	listEnemies	List all items/creatures around the player [Hint]
SPACE	pickOrSearchNearest	Pick or search object
T	treatmentsModal	diplomacy
t	takeOut	Throw item [Hint] / Take off worn item
U	unWield	Unload or empty wielded or nearby item [Hint]
u	use	eat, drink or consume item [Hint]. Apply or use currently wielded item. Apply or use an item [Hint]
V	vehicleHandbrake	Vehicle handbrake [Hint]
X	examine	Peek around corners
x	examine	Examine or interact with nearby world object [Hint].
y	developerSwitch	also yes
*/