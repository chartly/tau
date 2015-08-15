
/// <reference path="../lib/phaser.d.ts" />

export class GameScreen extends Phaser.State
{
	// members
	bg : Phaser.Sprite;
	player : Phaser.Sprite;
	cursors : Phaser.CursorKeys;
	
	assetScale : number;
	width : number;
	height : number;
	scaleRatio : number;
	
	// functions
	constructor()
	{
		super();
	}
	
	preload()
	{
		this.load.image('player-ship', 'img/ckeegan/hero_1.png');
		this.load.image('bg', 'img/ckeegan/backdrop1.jpg');
	}
	
	create()
	{
		this.physics.startSystem(Phaser.Physics.ARCADE);
		
		// set the background
		this.bg = this.game.add.sprite(0, 0, 'bg');
		
		// set the player up
		this.player = this.game.add.sprite(100, 100, 'player-ship');
		this.player.anchor.setTo(.5, .5);
		this.physics.enable(this.player, Phaser.Physics.ARCADE);
		
		// set up input
		this.cursors = this.game.input.keyboard.createCursorKeys();
	}
	
	init()
	{
		this.input.maxPointers = 1;
		this.scale.forceOrientation(true, false);
		this.assetScale = 1;
		if(window.innerWidth > 960 || window.innerHeight > 540)
		{
			this.assetScale = 2;
		}
		
		this.width = window.innerWidth / (960 * this.assetScale);
		this.height = window.innerHeight / (540 * this.assetScale);
		this.scaleRatio = Math.max(this.width, this.height);
	}
	
	update()
	{	
		// movement
		this.player.body.velocity.setTo(0, 0);
		
		if(this.cursors.left.isDown)
		{
			this.player.body.velocity.x = -200;
		}
		else if(this.cursors.right.isDown)
		{
			this.player.body.velocity.x = 200;
		}
	}
	
	render()
	{
		//....
	}
}
