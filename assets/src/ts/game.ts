
/// <reference path="../lib/phaser.d.ts" />

export class LevelScreen extends Phaser.State
{
	// members
	bg : Phaser.TileSprite;
	hero : Phaser.Sprite;
	
	// functions
	constructor()
	{
		super();
	}
	
	preload()
	{
		this.load.image("player-ship", "img/ckeegan/hero_1.png");
		this.load.image("bg", "img/ckeegan/backdrop1.jpg");
	}
	
	create()
	{
		this.physics.startSystem(Phaser.Physics.ARCADE);
		
		// set the background
		this.bg = this.add.tileSprite(0, 0, this.scale.width, this.scale.height);
		
		// set the player up
		this.hero = this.add.sprite(400, 500, "player-ship");
		this.hero.anchor.setTo(.5, .5);
		this.physics.enable(this.hero, Phaser.Physics.ARCADE);
	}
	
	
}
