import Dwarf from "./Dwarf";

class MountainDwarf extends Dwarf{
    constructor() {
        super();
        this.name += " (Горный)"

        this.ability.Strength = 2
    }
}

export default MountainDwarf