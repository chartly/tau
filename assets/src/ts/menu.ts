/// <reference path="../lib/phaser.d.ts" />

export class LogoScreen extends Phaser.State
{
	bg : Phaser.Sprite;
	timer : Phaser.Timer;
	fpsTxt : Phaser.Text;
	
	constructor()
	{
		super();
	}
	
	preload()
	{
		this.game.load.image('logo-bg', 'img/logo.png');
	}
	
	create()
	{
		// background sprite
		this.bg = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'logo-bg');
		this.bg.anchor.setTo(.5, .5);
		
		// fps counter text
		var style = { font: '65px Consolas', fill: '#ff0000', align: 'center'};
		this.fpsTxt = new Phaser.Text(this.game, 10, 10, "0", style);
		
		// timer to cycle to the next screen
		this.timer = new Phaser.Timer(this.game, true);
		this.timer.add(3000, this.onTimer);
		this.timer.start(10);
	}
	
	update()
	{
		// stringize the current fps count
		this.fpsTxt.text = this.game.time.fps.toString()
	}
	
	render()
	{
		this.game.debug.text("LogoScreen.render() lulz", 10, this.game.height - 80);
	}
	
	onTimer(e : Phaser.TimerEvent)
	{
		console.log("DERP A HERP");
		
		// kill the timer
		this.timer.stop();
		
		// start the next state
		this.game.state.start("LevelScreen")
	}
}