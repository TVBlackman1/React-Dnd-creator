import Halfling from "./Halfling";

class LightfootHalfling extends Halfling{
    constructor() {
        super();
        this.name += " (Легконогий)"
        this.ability.Charisma = 1
    }

}

export default LightfootHalfling