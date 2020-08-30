import React from "react";
// import List from "./list/list";
import './class.css'
import ClassDescription from "./description/description";
import PageTitle from "../page-title";
// import Advice from "./advice/advice";

class PageClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
            <div className="page-class-app">
                <PageTitle>ВЫБОР КЛАССОВ</PageTitle>
                {/* <List changeDescription={this.selectRace}/> */}
                {/* <RaceDescription ref={this.descriptionRef}/> */}
                {/* <Advice /> */}
                <ClassDescription />
            </div>
        );
    }
}

export default PageClass