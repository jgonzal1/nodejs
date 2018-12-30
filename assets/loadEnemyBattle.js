
function loadEnemyBattle(enemyName) {
    var ec = document.getElementById("fightersCanvas");
    var eCtx = ec.getContext("2d");
    eCtx.clearRect(0, 0, ec.width, ec.height);
    var healthBar = document.getElementById('health-bar');
    var playerImage = document.getElementById('toad');
    var enemyImage = document.getElementById(enemyName);
    eCtx.drawImage(playerImage, 0, 0);
    eCtx.drawImage(healthBar, 110, 0);
    eCtx.drawImage(enemyImage, 380, 0);
    eCtx.drawImage(healthBar, 490, 0);
    // attackAnimator("battleAnimation","sprites/visual-effects/!ElectricLvl3.png",                    200, 11 );
    // attackAnimator("battleAnimation","sprites/visual-effects/!FightShortTargetLvl1.png",            192, 5  );
    // attackAnimator("battleAnimation","sprites/visual-effects/!FightShotgunTargetExplosionLvl2.png", 100, 36 );
    // attackAnimator("battleAnimation","sprites/visual-effects/!FightShotgunTargetExplosionLvl3.png", 250, 15 );
    // attackAnimator("battleAnimation","sprites/visual-effects/!FightTargetLvl2.png",                 192, 22 );
    // attackAnimator("battleAnimation","sprites/visual-effects/!FireLvl2.png",                        160, 10 );
    // attackAnimator("battleAnimation","sprites/visual-effects/!FireTargetBurnt.png",                 120, 6  );
    // attackAnimator("battleAnimation","sprites/visual-effects/!FlyingLvl1.png",                      110, 14 );
    // attackAnimator("battleAnimation","sprites/visual-effects/!FlyingLvl1Enemy.png",                 110, 14 );
    // attackAnimator("battleAnimation","sprites/visual-effects/!GrassTargetLvl2.png",                 140, 12 ); // cut in E+S
    // attackAnimator("battleAnimation","sprites/visual-effects/!IceLvl1.png",                         140, 12 ); // rolls
    // attackAnimator("battleAnimation","sprites/visual-effects/!IceTargetFrozen.png",                 192, 15 );
    // attackAnimator("battleAnimation","sprites/visual-effects/!NormalBasicAttackLvl1.png",            30, 9  );
    // attackAnimator("battleAnimation","sprites/visual-effects/!PoisonLvl1.png",                      192, 15 );
    // attackAnimator("battleAnimation","sprites/visual-effects/!RockLvl1.png",                        192, 5  ); // cut in E
    // attackAnimator("battleAnimation","sprites/visual-effects/!RockLvl2.png",                        192, 7  );
    // attackAnimator("battleAnimation","sprites/visual-effects/!SteelTargetLvl2.png",                 192, 22 );
    // attackAnimator("battleAnimation","sprites/visual-effects/!WaterBasicAttackLvl1.png",             60, 13 );
}

module.exports = loadEnemyBattle;