game.test_stage = {

};

game.test_stage.create = function(){
    console.log('Test Stage initialized');

    var player = new Player('Darin', 'magician');
    var npc = new Npc('delinquent');

    while(npc.stats.ch_hp > 0 && player.stats.ch_hp > 0) {
        npc.attack(player);
        player.attack(npc);

        console.log(npc.stats.ch_stm <= 0 && player.stats.ch_stm <= 0);
        if(npc.stats.ch_stm <= 0 && player.stats.ch_stm <= 0){
            console.log('Both sides are too tired and faint unable to fight any further.');
            return;
        }
    }
};

