/// <reference path="../lib/phaser.d.ts" />

// local imports
import {Preload} from './menu'
import {GameScreen} from './game'

export class PhaserApp
{
	game : Phaser.Game;
	logoScreen : Preload;
	gameScreen : GameScreen;

	constructor()
	{
		// allocate phaser game object
		this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'framebuffer');
		this.logoScreen = new Preload();
		this.gameScreen = new GameScreen();

		// add the game states
		this.game.state.add("LogoScreen", this.logoScreen, false);
		this.game.state.add("GameScreen", this.gameScreen, false);

		// start the app
		this.game.state.start("GameScreen", true, true);
	}
}

// global dom hook
window.onload = () => {
	console.log('Hello, world!');

	new PhaserApp();
}