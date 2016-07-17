var Player = function(ch_name, ch_class){
    this.ch_name = ch_name;

    this.ch_class = null;

    this.stats = {
        ch_hp   : null,
        ch_en   : null,
        ch_stm  : null,

        ch_str  : null,
        ch_agi  : null,
        ch_int  : null
    };

    var ch_class = new CharacterClass(ch_class);

    this.ch_class = ch_class.class_name;
    this.stats = ch_class.stats;
};

Player.prototype.attack = function(target){
    var dmg = this.stats.ch_str;

    var cost = 10;

    this.stats.ch_stm -= cost;

    if(this.stats.ch_stm <= 0){
        console.log(this.ch_name + ' is too tired to attack.');
        return;
    }
    else{
        console.log(this.ch_name + ' has attacked ' + target.ch_name);

        this.stats.ch_stm -= cost;

        target.receive_damage(dmg);
    }
};

Player.prototype.receive_damage = function(dmg){
    this.stats.ch_hp -= dmg;

    console.log(this.ch_name + ' has received ' + dmg + ' damage. HP left: ' + this.stats.ch_hp);

    if(this.stats.ch_hp <= 0){
        console.log(this.ch_name + ' has died.');
    }
};
