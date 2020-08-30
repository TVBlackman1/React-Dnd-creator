import Human from "./Human";

class HumanAlt extends Human{
    constructor() {
        super();
        this.name += " (Альтернатива)"
        this.ability.Strength = 0
        this.ability.Dexterity = 0
        this.ability.Constitution = 0
        this.ability.Intelligence = 0
        this.ability.Wisdom = 0
        this.ability.Charisma = 0

        this.freeAbilityPointsMax = 2
        this.freeAbilityPoints = 2


    }
}

export default HumanAlt