/// <reference path="../lib/phaser.d.ts" />

export class Boot extends Phaser.State {

    parentElement: HTMLElement = document.getElementById("framebuffer");

    preload() {
        // preload something
    }

    create() {

        this.game.scale.fullScreenTarget = this.parentElement;
        this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL; // Important
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.stage.disableVisibilityChange = true;
        this.game.input.maxPointers = 1;

        this.game.scale.setResizeCallback(function() {
            resizeGame(this, this.parentElement); 
            // you would probably just use this.game.scale.setResizeCallback(this.resize, this);
        }, this);

        this.game.state.start('Preload', true, false);
    }

    
}

export function resizeGame(ctx: Phaser.State, element: HTMLElement)
{
    // A value of 1 means no scaling 0.5 means half size, 2 double the size and so on.
    var scale = Math.min(window.innerWidth / ctx.game.width, window.innerHeight / ctx.game.height);
 
    // Resize parent div in order to vertically center the canvas correctly.
    element.style.minHeight = window.innerHeight.toString() + "px";
 
    // Resize the canvas keeping the original aspect ratio.
    ctx.game.scale.setUserScale(scale, scale, 0, 0);
    
    var w = Math.floor(ctx.game.width * scale),
            h = Math.floor(ctx.game.height * scale);
        console.info("The game has just been resized to: " + w + " x " + h);
}