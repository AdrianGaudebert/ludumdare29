window.onload = function() {
    var game = new Phaser.Game(1000, 800, Phaser.AUTO, 'canvas-container');

    game.state.add('Boot',      App.Boot);
    game.state.add('Preloader', App.Preloader);
    game.state.add('MainMenu',  App.MainMenu);
    game.state.add('Game',      App.Game);
    game.state.add('DeathMenu', App.DeathMenu);

    game.state.start('Boot');
};
