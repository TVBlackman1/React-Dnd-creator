// нужен чисто чтобы у каждого элемента был свой цвет
// индивидуальность для каждой расы

import ReactDOM from 'react-dom';
import React from "react";
import './point.css'

// штука справа и слева для выбора и отмены расы
class Point extends React.Component {
    constructor(props) {
        super(props)
        this.setIsHidden = this.setIsHidden.bind(this)
        this.setShowedAdd = this.setShowedAdd.bind(this)
        this.setShowedRemove = this.setShowedRemove.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            pos: 0,
            className: "is-hidden",
            text: ""
        }

    }
    render() {
        return (
            <div className={"div-pick-race " + this.state.className} onClick={this.handleClick}>
                {this.state.text}
            </div>
        );
    }

    setIsHidden() {
        this.setState({
            className: "is-hidden",
            text: ""
        })
    }

    setShowedAdd() {
        if(this.state.className === "showed-add") {
            return
        }
        this.setState({
            className: "showed-add",
            text: "Выбрать"
        })
    }

    setShowedRemove() {
        this.setState({
            className: "showed-remove",
            text: "Удалить"
        })
    }

    handleClick() {
        if(this.state.className === "showed-add") {
            this.setIsHidden()
            // this.setShowedRemove()
            setTimeout(this.setShowedRemove, 100)

        }
        else if(this.state.className === "showed-remove") {
            this.setIsHidden()
            // this.setShowedAdd()
            setTimeout(this.setShowedAdd, 100)
        }
    }
}

export default Point