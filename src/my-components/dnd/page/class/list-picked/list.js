
import React from "react";
import './list.css'
import Li from "./li/li";
import races2subraces from "../../../game/race/races-subraces";


class ListPicked extends React.Component {
    constructor(props) {
        super(props)
        this.changeDescription = this.props.changeDescription
        this.lastChild = null
        this.thisChild = null
        this.state = {
            races: Object.keys(races2subraces)
        }
    }
    render() {
        return (
            <div className="class-picked-div">
                <ul className="class-list-picked-ul">
                    {this.state.races.map(
                        (text)=>(
                            <Li funcForList={this.funcForChildren.bind(this)}>{text}</Li>
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
        // let ind = this.state.races.indexOf(child.dndRaceName)
        this.changeDescription(races2subraces[child.dndRaceName])
        // получает имя выбранной расы и по нему ищет массив подрас.
        // выводит их описание

    }


}

export default ListPicked