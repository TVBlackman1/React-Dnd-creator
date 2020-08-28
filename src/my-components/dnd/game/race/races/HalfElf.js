import Race from "../basic/race";

class HalfElf extends Race{
    constructor() {
        super();
        this.name = "Полуэльф"
        this.ability.Charisma = 2
        this.freeAbilityPointsMax = 2
        this.freeAbilityPoints = 2
    }
}

export default HalfElf