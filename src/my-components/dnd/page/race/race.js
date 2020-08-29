import React from "react";
import List from "./list/list";
import './race.css'
import RaceDescription from "./description/description";
import PageTitle from "../page-title";
import Advice from "./advice/advice";

class PageRace extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pos: 0
        }

        this.descriptionRef = new React.createRef()
        this.selectRace = this.selectRace.bind(this)
    }

    /**
     * Принимает на вход список подрас одной расы
     */
    selectRace(raceArray) {
        // alert(race)
        this.descriptionRef.current.selectRace(raceArray)
    }

    render() {
        return (
            <div className="page-race-app">
                <PageTitle>ВЫБОР РАСЫ</PageTitle>
                <List changeDescription={this.selectRace}/>
                <RaceDescription ref={this.descriptionRef}/>
                <Advice />
            </div>
        );
    }
}

export default PageRace