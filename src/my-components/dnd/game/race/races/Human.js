import Race from "../basic/race";

class Human extends Race{
    constructor() {
        super();
        this.name = "Человек"
        this.ability.Strength = 1
        this.ability.Dexterity = 1
        this.ability.Constitution = 1
        this.ability.Intelligence = 1
        this.ability.Wisdom = 1
        this.ability.Charisma = 1


    }
}

export default Human