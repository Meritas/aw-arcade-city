var CharacterClass = function(class_name){
    this.class_name = null;

    this.stats = {
        ch_hp   : null,
        ch_en   : null,
        ch_stm  : null,

        ch_str  : null,
        ch_agi  : null,
        ch_int  : null
    };

    switch(class_name){
        case 'psychic':
            this.class_name = 'Psychic';

            this.stats.ch_hp = 100;
            this.stats.ch_en = 200;
            this.stats.ch_stm = 100;

            this.stats.ch_str = 10;
            this.stats.ch_agi = 10;
            this.stats.ch_int = 10;

            break;

        case 'magician':
            this.class_name = 'Magician';

            this.stats.ch_hp = 100;
            this.stats.ch_en = 160;
            this.stats.ch_stm = 100;

            this.stats.ch_str = 10;
            this.stats.ch_agi = 10;
            this.stats.ch_int = 20;

            break;
        case 'ki_fighter':
            this.class_name = 'Ki Fighter';

            this.stats.ch_hp = 150;
            this.stats.ch_en = 100;
            this.stats.ch_stm = 150;

            this.stats.ch_str = 20;
            this.stats.ch_agi = 20;
            this.stats.ch_int = 10;
    }

    return this;
};