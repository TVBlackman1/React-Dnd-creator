import Race from "../basic/race";

class Tiefling extends Race{
    constructor() {
        super();
        this.name = "Тифлинг"
        this.ability.Charisma = 2
        this.ability.Intelligence = 1

    }
}

export default Tiefling