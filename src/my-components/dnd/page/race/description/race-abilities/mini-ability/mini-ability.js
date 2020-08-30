import React from "react";
import './mini-ability.css'

class MiniAbility extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ability: 0,
            additionalAbility: 0
        }
        this.type = this.props.type
        this.handleClick = this.handleClick.bind(this)
        this.up = this.props.up
        this.down = this.props.down
    }

    getWidth() {
        return 100 / 5 * (this.state.ability + this.state.additionalAbility)
    }

    getStringWidth() {
        return this.getWidth() + "%"
    }

    /**
     * При обновлении компонента получить новые данные о характеристике,
     * сразу же её заменить.
     * */
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.state.ability = this.props.value;
        this.state.additionalAbility = this.props.addValue;
        if(this.state.additionalAbility > 0) {
            this.secondStyle = "second"
        } else {
            this.secondStyle = "standard"

        }
    }

    handleClick() {
        if(this.state.ability === 0 && this.state.additionalAbility === 0 && this.up(this.type)) {
            // TODO после смены расы убрать increased и стили
        }
        else if(this.state.additionalAbility > 0 && this.down(this.type)) {
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="name" onClick={this.handleClick}>
                    {this.props.name}
                </div>
                <div className="visual-wrapper" onClick={this.handleClick}>
                    <div className={"visual " + this.secondStyle}
                         style={{width: this.getStringWidth()}}/>
                </div>
                <div className="ability-number" onClick={this.handleClick}>
                    {this.state.ability + this.state.additionalAbility}
                </div>
            </React.Fragment>
        );
    }
}

export default MiniAbility