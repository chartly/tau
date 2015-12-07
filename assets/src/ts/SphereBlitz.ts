
/// <reference path="../lib/phaser.d.ts" />
/// <reference path="../lib/tsm-0.7.d.ts" />

export class SphereBlitz extends Phaser.State
{
	// members
	bg : Phaser.Sprite;
	player : Phaser.Sprite;
	
	cursors : Phaser.CursorKeys;
	mousePtr : Phaser.Pointer;

	// functions
	constructor()
	{
		super();
	}

	preload()
	{
		this.load.image('bg', "img/sb/bg_2.png");
		this.load.image('player', "img/sb/Wheel_1.png");
	}

	create()
	{
		this.game.stage.disableVisibilityChange = true;
		
		this.physics.startSystem(Phaser.Physics.ARCADE);

		// set the background
		this.bg = this.game.add.sprite(0, 0, 'bg');
		this.bg.setScaleMinMax(1280, 720, 1920, 1080);

		// set the player up
		this.player = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'player');
		this.player.anchor.setTo(.5, .5);
		this.player.scale.setTo(.33, .33);
		
		this.physics.enable(this.player, Phaser.Physics.ARCADE);
		this.player.body.velocity.setTo(0, 0);

		// set up input
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.mousePtr = this.game.input.mousePointer;
	}

	init()
	{
		this.input.maxPointers = 1;
		this.scale.forceOrientation(true, false);
	}

	update()
	{
		this.player.rotation = this.physics.arcade.angleToPointer(this.player, this.mousePtr);
		
	}

	render()
	{
		//....
	}
}
