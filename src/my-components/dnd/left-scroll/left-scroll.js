import React from "react";
import "./left-scroll.css"
import MiniAbilities from "./mini-abilities/mini-abilities";

class LeftScroll extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pos: 0
        }
        this.elems = [
            'Уровень',
            'Раса',
            'Класс',
            'Характеристики',
            'Черты',
            'Предыстория',
            'Ваш персонаж',
        ]
    }

    render() {
        return (
            <div className="left-scroll-div">
                <ul className="left-scroll-ul">
                    {
                        this.elems.map((item)=>(
                            <li className="left-scroll-li">{item}</li>
                        ))
                    }
                </ul>
                <MiniAbilities />
            </div>
        );
    }
}

export default LeftScroll