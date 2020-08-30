import React from "react";
import './description.css'
import ShowRace from "../../../game/race/show-race";
import HillDwarf from "../../../game/race/races/HillDwarf";
import MountainDwarf from "../../../game/race/races/MountainDwarf";

class RaceDescription extends React.Component {
    constructor(props) {
        super(props)
        this.reference = new React.createRef()
        // ссылкка на <ShowRace>
        this.state = {
            raceArray: [new HillDwarf(), new MountainDwarf()]
            // раса, первая будет отображаться
        }
    }

    /**
     * 
     * Принимается массив возможных подрас, идущих под одним общим названием
     * ind - по умолчанию не передается. Передается только при выборе расы через
     * header описания расы
     */
    selectRace(raceArray) {
        this.setState({
            raceArray: raceArray
        })
    }

    // поставить расу в самом начале
    componentDidMount() {
        this.reference.current.changeRace(this.state.raceArray)
    }

    /**
     * При срабатывании selectRace() вызывается этот метод, меняя описание расы
     * в дочернем компоненте
     * */
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.reference.current.changeRace(this.state.raceArray)

    }

    render() {
        return (
                <ShowRace ref={this.reference} raceArray={this.state.raceArray}/>
        );
    }
}

export default RaceDescription