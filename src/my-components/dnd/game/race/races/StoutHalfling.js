import Halfling from "./Halfling";

class StoutHalfling extends Halfling{
    constructor() {
        super();
        this.name += " (Стойкий)"
        this.ability.Constitution = 1
    }

}

export default StoutHalfling