
import React from "react";
import './list.css'
import Li from "./li/li";
import HillDwarf from "../../../game/race/races/HillDwarf";
import HighElf from "../../../game/race/races/HighElf";
import LightfootHalfling from "../../../game/race/races/LightfootHalfling";
import Human from "../../../game/race/races/Human";
import Dragonborn from "../../../game/race/races/Dragonborn";
import RockGnome from "../../../game/race/races/RockGnome";
import HalfElf from "../../../game/race/races/HalfElf";
import HalfOrc from "../../../game/race/races/HalfOrc";
import Tiefling from "../../../game/race/races/Tiefling";

class List extends React.Component {
    constructor(props) {
        super(props)
        this.changeDescription = this.props.changeDescription
        // меняет окошко описания расы на выбранное
        this.funcForChildren = this.funcForChildren.bind(this)
        this.lastChild = null
        this.thisChild = null
        this.state = {
            pos: 0,
            races: [
                'Дварф',
                'Эльф',
                'Полурослик',
                'Человек',
                'Драконорожденный',
                'Гном',
                'Полуэльф',
                'Полуорк',
                'Тифлинг',
            ],
            classes: [
                new HillDwarf(),
                new HighElf(),
                new LightfootHalfling(),
                new Human(),
                new Dragonborn(),
                new RockGnome(),
                new HalfElf(),
                new HalfOrc(),
                new Tiefling()
            ]
        }
    }
    render() {
        return (
            <div className="race-div">
                <ul className="race-list-ul">
                    {this.state.races.map(
                        (text)=>(
                            <Li funcForList={this.funcForChildren}>{text}</Li>
                        )
                    )}
                </ul>
            </div>
        );
    }

    /**
     * Функция убирает возможность выбора с неактивного пункта списка,
     * убирая с них фокус. Также она передает информацию об элементе,
     * который имеет функцию сейчас. Использует для отображения
     * особенностей расы в соответствующем разделе.
     * */
    funcForChildren(child) {
        if(this.thisChild == null) {
            this.thisChild = child
        }
        else if(this.thisChild !== child){
            this.lastChild = this.thisChild
            this.thisChild = child
            this.lastChild.removeFocus()
        }
        let ind = this.state.races.indexOf(child.dndRaceName)
        this.changeDescription(this.state.classes[ind])
        // получает имя выбранной расы и по нему ищет соответствующий класс.
        // выводит описание класса.

    }

    getRace() {

    }


}

export default List