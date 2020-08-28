import Race from "../basic/race";

class Gnome extends Race{
    constructor() {
        super();
        this.name = "Гном"
        this.ability.Intelligence = 2
    }
}

export default Gnome