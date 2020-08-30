import React from "react";
import MiniAbilities from "../race-abilities/mini-abilities";
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
        this.lastPickRaces = new Map()
        // для хранения последних используемых индексов для каждого массива подрас
        // ключами являются строки, для раздельности они именуются названием первой
        // расы в массиве. Не допускается иметь несколько одинакого названных рас.
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

    changeRace(raceArray, ind=-1) {
        if(this.lastPickRaces.has(raceArray[0].name)) {
            // если индекс уже существует в памяти, то поставить его.
            // если он передается как -1 (т.е. явно не существует), то поставить
            // значение из памяти, если передается четкий явный индекс,то поставить его
            ind = (ind !== -1)? ind : this.lastPickRaces.get(raceArray[0].name)
        } else {
            // если отсутствует, то раса выбрана впервые, можно показать первый элемент
            ind = 0
        }
        this.lastPickRaces.set(raceArray[0].name, ind)

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
