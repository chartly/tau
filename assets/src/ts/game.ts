module Tau
{
	export class Game
	{
		game : Phaser.Game;
		clock : Phaser.Timer;
		
		constructor()
		{
			this.game = new Phaser.Game(900, 600, Phaser.AUTO, 'content');
			this.clock = new Phaser.Timer(this.game, false);
			
		}
	}	
}
