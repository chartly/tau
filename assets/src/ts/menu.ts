module Tau
{
	export class LogoScreen extends Phaser.State
	{
		bg : Phaser.Sprite;
		timer : Phaser.Timer;
		
		preload()
		{
			this.game.load.image('logo-bg', 'img/logo.png');
		}
		
		create()
		{
			this.bg = this.game.add.sprite(0, 0, 'logo-bg');
		}
		
		onTimer(e : Phaser.TimerEvent)
		{
			
		}
	}
}