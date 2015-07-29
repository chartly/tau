/// <reference path="../../../node_modules/phaser/typescript/phaser.d.ts" />

import {LogoScreen} from './menu'
import {LevelScreen} from './game'

export class GameApp
{
	game : Phaser.Game;
	logoScreen : LogoScreen;
	levelScreen : LevelScreen;
	
	constructor()
	{
		// allocate phaser game object
		this.game = new Phaser.Game(900, 600, Phaser.WEBGL, 'content');
		this.logoScreen = new LogoScreen();
		this.levelScreen = new LevelScreen();
		
		// add the game states
		this.game.state.add("LogoScreen", this.logoScreen, false);
		this.game.state.add("LevelScreen", this.levelScreen, false);
		
		// start the app
		this.game.state.start("LogoScreen", true, true);
	}
}

// global dom hook
window.onload = () => {
	console.log('Hello, world!');
	
	new GameApp();
}