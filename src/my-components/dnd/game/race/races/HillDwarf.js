import Dwarf from "./Dwarf";

class HillDwarf extends Dwarf{
    constructor() {
        super();
        this.name += " (Холмовой)"

        this.ability.Wisdom = 1
    }

    getHitPointsMaxBonus() {
        return this.level;
    }
}

export default HillDwarf