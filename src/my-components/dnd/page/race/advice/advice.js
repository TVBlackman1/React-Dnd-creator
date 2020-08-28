import React from "react";
import './advice.css'

class Advice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pos: 0
        }
    }

    render() {
        return (
            <div className="advice-div">
                Для совета нажмите на нужную расу
            </div>
        );
    }
}

export default Advice