var NpcClass = function(npc_class){
    this.class_name = null;

    this.stats = {
        ch_hp   : null,
        ch_en   : null,
        ch_stm  : null,

        ch_str  : null,
        ch_agi  : null,
        ch_int  : null
    };

    switch(npc_class) {
        case 'delinquent':
            this.class_name = 'Delinquent';

            this.stats.ch_hp = 600;
            this.stats.ch_en = 40;
            this.stats.ch_stm = 50;

            this.stats.ch_str = 10;
            this.stats.ch_agi = 10;
            this.stats.ch_int = 10;

            break;
    }

    return this;
};