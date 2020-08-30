import Gnome from "./Gnome";

class ForestGnome extends Gnome{
    constructor() {
        super();
        this.name += " (Лесной)"
        this.ability.Dexterity = 1
    }
}

export default ForestGnome