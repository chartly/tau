
/// <reference path="../lib/phaser.d.ts" />

export class SphereBlitz extends Phaser.State
{
	// members
	bg : Phaser.TileSprite;
	player : Phaser.Sprite;
	
	playerSpeed : number;
	cursors : Phaser.CursorKeys;

	// functions
	constructor()
	{
		super();
	}

	preload()
	{
		this.load.image('bg', "img/sb/Border Cannon Placements Placeholder.png");
		this.load.image('player', "img/sb/Wheel Placeholder Revised");
	}

	create()
	{
		this.game.stage.disableVisibilityChange = true;
		
		this.physics.startSystem(Phaser.Physics.ARCADE);

		// set the background
		this.bg = this.game.add.tileSprite(0, 0, 1920, 1080, 'bg');

		// set the player up
		this.player = this.game.add.sprite(this.game.width / 2, this.game.height, 'player-ship');
		this.player.anchor.setTo(.5, .5);
		this.player.scale.setTo(.5, .5);
		this.physics.enable(this.player, Phaser.Physics.ARCADE);

		// set up input
		this.cursors = this.game.input.keyboard.createCursorKeys();
	}

	init()
	{
		this.input.maxPointers = 1;
		this.scale.forceOrientation(true, false);
		
		this.playerSpeed = 350;
	}

	update()
	{
		// movement
		this.player.body.velocity.setTo(0, 0);
	}

	render()
	{
		//....
	}
}
