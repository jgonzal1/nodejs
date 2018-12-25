// Copyright 2013 William Malone (www.williammalone.com)
// Licensed under the Apache License, Version 2.0 (the "License");
function browserHandler() {
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
	// MIT license
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback) { // callback, element
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(
				function() { callback(currTime + timeToCall); },
				timeToCall
			);
            lastTime = currTime + timeToCall;
            return id;
		};
	}
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
		};
	}
}
browserHandler();

/**
 * @param {string} canvasHtmlId
 * @param {string} imageSpritePath
 * @param {number} height
 * @param {number} numberOfFrames
 */
function animateSprite(canvasHtmlId, imageSpritePath, height, numberOfFrames) {
	var imageSprite,
		imageSpriteImage,
		canvas;
	function gameLoop () {
		window.requestAnimationFrame(gameLoop);
		imageSprite.update();
		imageSprite.render();
	}
	function sprite (options) {
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
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
                } else {
                    frameIndex = 0;
                }
            }
        };
		that.render = function () {
			that.context.clearRect(0, 0, that.width, that.height);
			//that.context.fillStyle = "#444444";
			that.context.drawImage(
				that.image,
				frameIndex * that.width / numberOfFrames,
				0,
				that.width / numberOfFrames,
				that.height,
				0,
				0,
				that.width / numberOfFrames,
				that.height
			);
		};
		return that;
	}
	canvas = document.getElementById(canvasHtmlId);
	imageSpriteImage = new Image(); // Create sprite sheet
	imageSprite = sprite({ // Create sprite
		context: canvas.getContext("2d"),
		height: height,
		image: imageSpriteImage,
		numberOfFrames: numberOfFrames,
		width: height*numberOfFrames,		
		ticksPerFrame: 4
	});
	imageSpriteImage.addEventListener("load", gameLoop); // Load sprite sheet
	imageSpriteImage.src = imageSpritePath;
}
//animateSprite("coinAnimation","images/!BasicAttack.png", 30, 3);
animateSprite("coinAnimation","images/coin-sprite-animation.png", 100, 10);

module.exports = animateSprite;