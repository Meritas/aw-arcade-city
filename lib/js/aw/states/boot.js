game.boot = {

};

game.boot.create = function(){
    game.game.physics.startSystem(Phaser.Physics.ARCADE);

    game.game.state.start('test_stage');
};
