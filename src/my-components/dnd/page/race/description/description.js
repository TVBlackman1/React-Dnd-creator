import React from "react";
import './description.css'
import ShowRace from "../../../game/race/show-race";
import HillDwarf from "../../../game/race/races/HillDwarf";

class RaceDescription extends React.Component {
    constructor(props) {
        super(props)
        this.reference = new React.createRef()
        // ссылкка на <ShowRace>
        this.state = {
            race: new HillDwarf()
            // раса, первая будет отображаться
        }
    }

    /**
     * 
     * Принимается массив возможных подрас, идущих под одним общим названием
     * ind - по умолчанию не передается. Передается только при выборе расы через
     * header описания расы
     */
    selectRace(raceArray, ind=0) {
        this.setState({
            race: raceArray[ind]
        })
    }

    // поставить расу в самом начале
    componentDidMount() {
        this.reference.current.changeRace(this.state.race)
    }

    /**
     * При срабатывании selectRace() вызывается этот метод, меняя описание расы
     * в дочернем компоненте
     * */
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.reference.current.changeRace(this.state.race)

    }

    render() {
        return (
                <ShowRace ref={this.reference} race={this.state.race}/>
        );
    }
}

export default RaceDescription