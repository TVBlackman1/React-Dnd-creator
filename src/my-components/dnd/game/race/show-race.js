import React from "react";
import MiniAbilities from "./race-abilities/mini-abilities";
import "./show-race.css"

class ShowRace extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pickMenuOpened: false,
            pickMenuStyle: "closed",
            raceArray: props.raceArray,
            raceInd: 0,
            headerStyle: ""
        }
        this.refAbility = new React.createRef()
    }

    setAbility() {
        this.refAbility.current.setAbilities(this.state.raceArray[this.state.raceInd])
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

    changeRace(raceArray, ind=0) {
        this.setState({
            headerStyle: "hidden"
        })
        setTimeout(() => {
            this.setState({
                raceArray: raceArray,
                raceInd: ind
            })}, 200
        )
        setTimeout(() => {
            this.setState({
                headerStyle: ""
            })}, 400
        )
    }

    handleClickHeader() {
        if(this.state.pickMenuOpened) {
            this.setState({
                pickMenuStyle: "closed",
                pickMenuOpened: false

            })
        } else {
            this.setState({
                pickMenuStyle: "",
                pickMenuOpened: true
            })
        }

    }

    handleClickHeaderRace(raceInd) {
        this.changeRace.bind(this)(this.state.raceArray, raceInd)
        this.handleClickHeader();
    }

    render() {
        var raceInd = 0
        return (
            <div className="race-description">
                <div className="header-bg" onClick={this.handleClickHeader.bind(this)}>
                    <header className={this.state.headerStyle}>
                        ± {this.state.raceArray[this.state.raceInd].name} ±
                    </header>
                </div>
                <main>
                    <div className={"race-picker " + this.state.pickMenuStyle}>
                        <div className="race-picker-bg"></div>
                        {this.state.raceArray.map((race)=>(
                            <PickerRace number={raceInd++}
                                        func={this.handleClickHeaderRace.bind(this)}
                            >
                                {race.name}
                            </PickerRace>
                            ))}
                    </div>
                    <div className="subtitle">Характеристики</div>
                    <MiniAbilities ref={this.refAbility} />
                    <div className="subtitle">Особенности</div>
                </main>
            </div>
        );
    }
}

class PickerRace extends React.Component {
    constructor(props) {
        super(props)
        this.ind = this.props.number
        this.func = this.props.func
    } 

    
    render() {
        return (
            <div className="picker-race" onClick={()=>{
                this.func(this.ind)
            }}>{this.props.children}</div>
        );
    }
    hh
}

export default ShowRace

// ()=>{
//     alert(raceInd)
//     this.changeRace.bind(this)(this.state.raceArray, raceInd)
//     this.handleClickHeader();
// }