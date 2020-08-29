import Race from "../basic/race";
// import HillDwarf from "./HillDwarf"
// import MountainDwarf from "./MountainDwarf"

class Dwarf extends Race{
    constructor() {
        super();
        this.name = "Дварф"
        this.ability.Constitution = 2

        // this.subraces.push(new MountainDwarf())
        // this.subraces.push(new HillDwarf())

        // this.firstRace = this.subraces[0]

    }
}

export default Dwarf