import React from "react";
// import List from "./list/list";
import './class.css'
import ClassDescription from "./description/description";
import PageTitle from "../page-title";
import List from "./list/list";
import ListPicked from "./list-picked/list";
// import Advice from "./advice/advice";

class PageClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

        this.descriptionRef = new React.createRef()
    }

    /**
     * Принимает на вход список подрас одной расы
     */
    selectClass(classArray) {
        // alert(race)
        this.descriptionRef.current.selectClass(classArray)
    }

    render() {
        return (
            <div className="page-class-app">
                <PageTitle>ВЫБОР КЛАССОВ</PageTitle>
                <List changeDescription={this.selectClass.bind(this)}/>
                <ListPicked changeDescription={this.selectClass.bind(this)}/>
                {/* <List changeDescription={this.selectRace}/> */}
                {/* <RaceDescription ref={this.descriptionRef}/> */}
                {/* <Advice /> */}
                <ClassDescription ref={this.descriptionRef}/>
            </div>
        );
    }
}

export default PageClass