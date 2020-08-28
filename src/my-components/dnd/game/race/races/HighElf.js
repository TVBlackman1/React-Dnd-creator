import Elf from "./Elf";

class HighElf extends Elf{
    constructor() {
        super();
        this.name += " (Высший)"
        this.ability.Intelligence = 1


    }
}

export default HighElf