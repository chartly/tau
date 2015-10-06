
/// <reference path="../lib/phaser.d.ts" />

export class Shmup extends Phaser.State
{
	// members
	bg : Phaser.TileSprite;
	bgOverlay : Phaser.TileSprite;
	player : Phaser.Sprite;

	bgVelocity : Phaser.Point;

	playerSpeed : number;
	cursors : Phaser.CursorKeys;

	roundsFired : Array<Phaser.Sprite>;
	roundChambered : Phaser.Sprite;
	fireRate : number;
	fireButton : any;

	// functions
	constructor()
	{
		super();
	}

	preload()
	{
		this.load.image('laser', 'img/ckeegan/laser_1.png');
		this.load.image('bg-overlay', 'img/ckeegan/game_screen.png');
		this.load.image('player-ship', 'img/ckeegan/hero_1.png');
		this.load.image('bg', 'img/ckeegan/backdrop1.jpg');
	}

	create()
	{
		this.game.stage.disableVisibilityChange = true;

		this.physics.startSystem(Phaser.Physics.ARCADE);

		// set the background
		this.bg = this.game.add.tileSprite(0, 0, 1920, 1080, 'bg');
		this.bgVelocity = new Phaser.Point(1.5 / 2, 2.75 / 2);

		this.bgOverlay = this.game.add.tileSprite(this.game.width / 2, this.game.height / 2, 1920, 1080, 'bg-overlay');
		this.bgOverlay.anchor.set(.5, .5);
		this.bgOverlay.scale = new Phaser.Point(.91, 1);

		// set the player up
		this.player = this.game.add.sprite(this.game.width / 2, this.game.height - 170, 'player-ship');
		this.player.anchor.setTo(.5, .5);
		this.player.scale.setTo(.5, .5);
		this.physics.enable(this.player, Phaser.Physics.ARCADE);

		// our bullets
		this.roundChambered = this.game.add.sprite(this.player.position.x, this.player.position.y + 8, 'laser');
		this.physics.enable(this.roundChambered, Phaser.Physics.ARCADE);
		this.roundChambered.anchor.x = 0.5;
		this.roundChambered.anchor.y = 1;
		this.fireRate = 0;
		this.roundChambered.checkWorldBounds = true;
		this.roundChambered.outOfBoundsKill = true;
		this.roundChambered.exists = false;

		// set up input
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	}

	init()
	{
		this.input.maxPointers = 1;
		this.scale.forceOrientation(true, false);

		this.playerSpeed = 350;
	}

	update()
	{
		this.bg.tilePosition.x += this.bgVelocity.x;
		this.bg.tilePosition.y += this.bgVelocity.y;

		// movement
		this.player.body.velocity.setTo(0, 0);
		//this.player.body.rotation -= 3.14159 / 4;

		if (this.cursors.left.isDown)
		{
			this.player.body.velocity.x += -1 * this.playerSpeed;
		}
		if (this.cursors.right.isDown)
		{
			this.player.body.velocity.x += this.playerSpeed;
		}
		if (this.cursors.down.isDown)
		{
			this.player.body.velocity.y += this.playerSpeed;
		}
		if (this.cursors.up.isDown)
		{
			this.player.body.velocity.y += -1 * this.playerSpeed;
		}

		// shooting?
		if (this.fireButton.isDown && this.game.time.now > this.fireRate)
		{
			this.roundChambered.reset(this.player.position.x, this.player.position.y + 8);
			this.roundChambered.body.velocity.y = -400;
			this.fireRate = this.game.time.now + 200;
		}
	}

	render()
	{
		//....
	}
}
