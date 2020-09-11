// нужен чисто чтобы у каждого элемента был свой цвет
// индивидуальность для каждой расы

import ReactDOM from 'react-dom';
import React from "react";
import './li.css'
import Point from "./point/point";

class Li extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.removeFocus = this.removeFocus.bind(this)
        this.funcForList = this.props.funcForList
        this.dndRaceName = this.props.children
        this.myRef = React.createRef()
        this.state = {
            picked: false
        }
    }
    render() {
        return (
            <div className={"class-list-li " + this.pickedStyle()} onClick={this.handleClick}>
                <Point ref={this.myRef}/>
                {this.dndRaceName}
            </div>
        );
    }

    pickedStyle() {
        return this.state.picked ? "class-list-picked " : ""
    }

    /**
     * Фокус на элемент, на него нажали
     * */
    handleClick() {
        if(this.state.picked)
            return
        this.setState({
            picked: true

        })
        this.myRef.current.setShowedAdd() // отобразить point в этом <li>
        this.funcForList(this) // убрать point с других <li> списка и передать
                               // информацию о выбранной расе в <RaceDescription>
    }

    /**
     * Убрать фокус с элемента, скрывает кнопки в элементе списка
     * Нужно при выборе другого элемента списка, чтобы не отображалось
     * у каждого из них, вызывается из родителя класса
     * */
    removeFocus() {
        this.setState({
            picked: false
        })
        this.myRef.current.setIsHidden()
    }


}

export default Li