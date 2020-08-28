import Race from "../basic/race";

class Halfling extends Race{
    constructor() {
        super();
        this.name = "Полурослик"
        this.ability.Dexterity = 2
    }
}

export default Halfling