import Gnome from "./Gnome";

class RockGnome extends Gnome{
    constructor() {
        super();
        this.name += " (Каменный)"
        this.ability.Constitution = 1
    }

    getHitPointsMaxBonus() {
        return this.level;
    }
}

export default RockGnome