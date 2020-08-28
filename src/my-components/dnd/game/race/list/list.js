
import React from "react";
import './list.css'
let pageProps = {
    color: "white"
}

function setStyle(color) {
    if (color != "") {
        return {
            backgroundColor: color
        }
    }
    return {
        backgroundColor: "white"
    }
}

class List extends React.Component {
    constructor(props) {
        super(props)
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
            ]
            
        }
        this.style_set = setStyle(props.color)}

    render() {
        return (
            <div className="race-div">
                <ul className="race-list-ul">
                    {this.state.races.map(
                        (text)=>(
                            <li className="race-list-li">{text}</li>
                        )
                    )}
                </ul>
            </div>
        );
    }
}

export default List