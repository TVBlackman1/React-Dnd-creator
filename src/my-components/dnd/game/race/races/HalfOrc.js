import Race from "../basic/race";

class HalfOrc extends Race{
    constructor() {
        super();
        this.name = "Полуорк"
        this.ability.Strength = 2
        this.ability.Constitution = 1


    }
}

export default HalfOrc