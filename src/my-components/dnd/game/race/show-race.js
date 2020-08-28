import React from "react";
import MiniAbilities from "./race-abilities/mini-abilities";
import "./show-race.css"

class ShowRace extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            race: props.race,
            headerStyle: ""
        }
        this.refAbility = new React.createRef()
    }

    setAbility() {
        this.refAbility.current.setAbilities(this.state.race)
    }

    /**
     * Начальная раса, отображаемый текст и свойства расы
     * */
    componentDidMount() {
        this.setAbility()
    }

    /**
     * Вызывается при смене расы, меняет отображаемый текст и свойства расы
     * */
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setAbility()
    }

    changeRace(race) {
        this.setState({
            headerStyle: "hidden"
        })
        setTimeout(() => {
            this.setState({
                race: race,
            })}, 200
        )
        setTimeout(() => {
            this.setState({
                headerStyle: ""
            })}, 400
        )

    }

    render() {
        return (
            <div className="race-description">
                <div className="header-back">
                    <header className={this.state.headerStyle}>
                        ± {this.state.race.name} ±
                    </header>
                </div>
                <main>
                    <div className="subtitle">Характеристики</div>
                    <MiniAbilities ref={this.refAbility} />
                    <div className="subtitle">Особенности</div>
                </main>
            </div>
        );
    }
}

export default ShowRace