import Elf from "./Elf";

class WoodElf extends Elf{
    constructor() {
        super();
        this.name += " (Лесной)"
        this.ability.Wisdom = 1


    }
}

export default WoodElf