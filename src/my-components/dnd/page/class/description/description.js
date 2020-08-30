import React from "react";
import './description.css'
// import ShowRace from "./show-race/show-race"

class ClassDescription extends React.Component {
    constructor(props) {
        super(props)
        this.reference = new React.createRef()
        // ссылкка на <ShowRace>
        this.state = {
            // raceArray: [new HillDwarf(), new MountainDwarf()]
            // раса, первая будет отображаться
        }
    }

    render() {
        return (
                // <ShowRace ref={this.reference} raceArray={this.state.raceArray}/>
                <div className="class-description">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
        );
    }
}

export default ClassDescription