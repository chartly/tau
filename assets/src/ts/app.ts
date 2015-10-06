/// <reference path="../lib/phaser.d.ts" />

// local imports
import {Preload} from 'menu'
import {Shmup} from 'shmup'
import {SphereBlitz} from 'SphereBlitz'

export class PhaserApp
{
	game : Phaser.Game;
	logoScreen : Preload;
	shmup : Shmup;
	sphereBlitz : SphereBlitz;

	constructor()
	{
		// allocate phaser game object
		this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'framebuffer');
		this.logoScreen = new Preload();
		this.shmup = new Shmup();
		this.sphereBlitz = new SphereBlitz();

		// add the game states
		this.game.state.add("LogoScreen", this.logoScreen, false);
		this.game.state.add("Shmup", this.shmup, false);
		this.game.state.add("SphereBlitz", this.sphereBlitz, false);

		// start the app
		this.game.state.start("SphereBlitz", true, true);
	}
}

// global dom hook
window.onload = () => {
	console.log('Hello, world!');

	new PhaserApp();
}