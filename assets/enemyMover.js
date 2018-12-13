const mH = require('./moveHandlers');

function enemyMover(defaultMovementLength) {
    //mH.goToPlayer(global.bloodyeye,0.7*defaultMovementLength);
    mH.goToPlayer(global.death,0.9*defaultMovementLength);
    mH.goToPlayer(global.dracula,0.8*defaultMovementLength);
    mH.goToPlayer(global.empire1,0.4*defaultMovementLength);
    mH.goToPlayer(global.empire2,0.4*defaultMovementLength);
    mH.goToPlayer(global.gollum,0.4*defaultMovementLength);
    mH.goToPlayer(global.jabba,0.1*defaultMovementLength);
    mH.goToPlayer(global.joker,Math.random()*1.2*defaultMovementLength);
    mH.goToPlayer(global.mummy,0.7*defaultMovementLength);
    //mH.goToPlayer(global.owl,0.5*defaultMovementLength);
    mH.goToPlayer(global.phantom,0.7*defaultMovementLength);
    //mH.goToPlayer(global.pirateskull,0.8*defaultMovementLength);
    mH.goToPlayer(global.skeleton,0.7*defaultMovementLength);
    mH.goToPlayer(global.spider,0.5*defaultMovementLength);
    //mH.goToPlayer(global.undeadhand,0.6*defaultMovementLength);
    //mH.goToPlayer(global.vampire,0.5*defaultMovementLength);
}

module.exports = enemyMover;