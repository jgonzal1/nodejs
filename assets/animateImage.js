function gameLoop(imageSprite) {
    window.requestAnimationFrame(gameLoop);
    imageSprite.update();
    imageSprite.render();
}
function updateImage(that, frameIndex, numberOfFrames, tickCount, ticksPerFrame) {
    if (tickCount > ticksPerFrame) {
        tickCount = 0;
        if (frameIndex < numberOfFrames - 1) { // The current frame index is in range
            frameIndex += 1; // Go to the next frame
            document.getElementById("battleAnimation").style.display = 'inline';
            return frameIndex;
        } else {
            // frameIndex = 0;
            document.getElementById("battleAnimation").style.display = 'none';
            that.context = null;
            that.image = null;
            return frameIndex;
        }
    } else {
        return frameIndex;
    }
}
function clearImage(image, w, h) {
    image.context.clearRect( 0, 0, w, h );
}
function createSprite() {
    return {
        context: this.canvas.getContext("2d"),
        width: this.height*this.numberOfFrames,
        height: this.height,
        image: this.imageSpriteImage
    };
}

/** animateAttack jsDoc
 * @param {string} canvasHtmlId
 * @param {string} imageSpritePath
 * @param {number} height
 * @param {number} numberOfFrames
 */
function animateAttack(canvasHtmlId, imageSpritePath, height, numberOfFrames, side) {
    var canvas = document.getElementById(canvasHtmlId);
    var ticksPerFrame = Math.round(40/numberOfFrames); // options.ticksPerFrame || 
    var imageSprite,
        imageSpriteImage;
    function gameLoop () {
        window.requestAnimationFrame(gameLoop);
        imageSprite.update();
        imageSprite.render();
    }
    function sprite (options) {
        var that = {},
            frameIndex = 0,
            tickCount = 0;
        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;
        that.update = function () {
            tickCount += 1;
            // frameIndex = updateImage(that, frameIndex, numberOfFrames, tickCount, ticksPerFrame);
            if (tickCount > ticksPerFrame) {
                tickCount = 0;
                if (frameIndex < numberOfFrames - 1) { // The current frame index is in range
                    frameIndex += 1; // Go to the next frame
                    document.getElementById("battleAnimation").style.display = 'inline';
                } else {
                    // frameIndex = 0;
                    document.getElementById("battleAnimation").style.display = 'none';
                    that.context = null;
                    that.image = null;
                }
            }
        };
        that.render = function () {
            that.context.clearRect( 0, 0, canvas.width, canvas.height );
            var xMove;
            if (side === 'L') {
                xMove = 80 + frameIndex*25;
            } else if (side === 'R') {
                xMove = 350 - frameIndex*25;
            } else {
                xMove = 0;
            }
            that.context.drawImage(
                that.image,                               // image, canvas, or video element to use
                frameIndex * that.width / numberOfFrames, // image x coordinate where to start clipping
                0,                                        // that.height-canvas.height image y coordinate where to start clipping
                that.width / numberOfFrames,              // width of the clipped image on the canvas
                that.height,                              // height of the clipped image on the canvas
                xMove,                                    // x coordinate where to place the clipped image on the canvas
                80, // 0,                                 // y coordinate where to place the clipped image on the canvas
                that.width / numberOfFrames,              // image to use width (to stretch or reduce it)
                that.height                               // image to use height (to stretch or reduce it)
            );
        };
        return that;
    }
    imageSpriteImage = new Image(); // Create sprite sheet
    imageSprite = sprite({ // Create sprite
        context: canvas.getContext("2d"),
        width: height*numberOfFrames,
        height: height,
        image: imageSpriteImage
    });
    imageSpriteImage.addEventListener("load", gameLoop); // Load sprite sheet
    imageSpriteImage.src = imageSpritePath;
}

/** dash jsDoc
 * @param {string} canvasHtmlId
 * @param {string} imageSpritePath
 * @param {number} height must be the same of the  width of each the sprite
 * @param {number} numberOfFrames
 */ 
function dash(canvasHtmlId, imageSpritePath, height, numberOfFrames, side) {
    var canvas = document.getElementById(canvasHtmlId);
    var ticksPerFrame = Math.round(12/numberOfFrames); // options.ticksPerFrame || 
    var imageSprite,
        imageSpriteImage;
    function gameLoop () {
        window.requestAnimationFrame(gameLoop);
        imageSprite.update();
        imageSprite.render();
    }
    function sprite (options) {
        var that = {},
            frameIndex = 0,
            tickCount = 0;
        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;
        that.update = function () {
            tickCount += 1;
            if (tickCount > ticksPerFrame) {
                tickCount = 0;
                if (frameIndex < numberOfFrames - 1) { // The current frame index is in range
                    frameIndex += 1; // Go to the next frame
                    document.getElementById(canvasHtmlId).style.display = 'inline';
                } else {
                    // frameIndex = 0;
                    document.getElementById(canvasHtmlId).style.display = 'none';
                    that.context = null;
                    that.image = null;
                }
            }
        };
        that.render = function () {
            that.context.clearRect( 0, 0, that.width, that.height );
            var xDash, yDash, backwardFrameIndex;
            var backwardFrameInit = Math.round(3*numberOfFrames/5);
            if (frameIndex <= backwardFrameInit) {
                if (frameIndex === 1) {
                    document.getElementById(canvasHtmlId).style.display = 'inline';
                }
                if (side === 'L') {
                    xDash = frameIndex;
                } else if (side === 'R') {
                    xDash = 380 - frameIndex;
                }
                yDash = (frameIndex-18)*frameIndex/12;
            } else {
                backwardFrameIndex = frameIndex - backwardFrameInit;
                if (side === 'L') {
                    xDash = numberOfFrames - frameIndex;
                } else if (side === 'R') {
                    xDash = 380 - (numberOfFrames - frameIndex);
                }
                yDash = (backwardFrameIndex-12)*backwardFrameIndex/8;
            }
            that.context.drawImage(
                that.image,  // image, canvas, or video element to use	
                0,           // image x coordinate where to start clipping
                0,           // that.height-canvas.height image y coordinate where to start clipping
                that.width,  // width of the clipped image on the canvas
                that.height, // height of the clipped image on the canvas
                xDash,       // x coordinate where to place the clipped image on the canvas
                yDash,       // y coordinate where to place the clipped image on the canvas
                that.width,  // image to use width (to stretch or reduce it)
                that.height  // image to use height (to stretch or reduce it)
            );
        };
        return that;
    }
    imageSpriteImage = new Image(); // Create sprite sheet
    imageSprite = sprite({ // Create sprite
        context: canvas.getContext("2d"),
        width: height*numberOfFrames,
        height: height,
        image: imageSpriteImage
    });
    imageSpriteImage.addEventListener("load", gameLoop); // Load sprite sheet
    imageSpriteImage.src = imageSpritePath;
}

module.exports.animateAttack = animateAttack;
module.exports.dash = dash;