import React from "react";
import './description.css'
import HillDwarf from "../../../game/race/races/HillDwarf";
import MountainDwarf from "../../../game/race/races/MountainDwarf";
// import ShowRace from "./show-race/show-race"

class ClassDescription extends React.Component {
    constructor(props) {
        super(props)
        this.reference = new React.createRef()
        // ссылкка на <ShowRace>
        this.state = {
            classArray: [new HillDwarf(), new MountainDwarf()]
            // раса, первая будет отображаться
        }
    }

    /**
     * 
     * Принимается массив возможных подрас, идущих под одним общим названием
     * ind - по умолчанию не передается. Передается только при выборе расы через
     * header описания расы
     */
    selectClass(classArray) {
        this.setState({
            classArray: classArray
        })
    }

    render() {
        return (
                // <ShowRace ref={this.reference} raceArray={this.state.raceArray}/>
                <div className="class-description">
                    <div>{this.state.classArray[0].name}</div>
                    <div></div>
                </div>
        );
    }
}

export default ClassDescription