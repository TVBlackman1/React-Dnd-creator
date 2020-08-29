import Elf from "./Elf";

class Drow extends Elf{
    constructor() {
        super();
        this.name += "Темный"
        this.ability.Charisma = 1


    }
}

export default Drow