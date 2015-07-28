module Tau
{
	export class GameApp
	{
		game : Phaser.Game;
		
		constructor()
		{
			// allocate phaser game object
			this.game = new Phaser.Game(900, 600, Phaser.WEBGL, 'content');
			
			// add the game states
			this.game.state.add("LogoScreen", LogoScreen, false);
			this.game.state.add("LevelScreen", LevelScreen, false);
			
			// start the app
			this.game.state.start("LogoScreen");
		}
	}
}

// global dom hook
window.onload = () => {
	console.log('Hello, world!');
	
	new Tau.GameApp();
}