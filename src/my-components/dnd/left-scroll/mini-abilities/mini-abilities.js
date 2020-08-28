import React from "react";
import './mini-abilities.css'

class MiniAbilities extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ability: {
                Strength: 15,
                Dexterity: 14,
                Constitution: 14,
                Intelligence: 8,
                Wisdom: 12,
                Charisma: 10
            }
        }
    }

    setAbilities(newAbility) {
        this.setState({
                ability: newAbility
            }
        )
    }

    getWidth(ability) {
        return 10 / 20 * ability
    }

    getStringWidth(ability) {
        return this.getWidth(ability) + "vw"
    }

    render() {
        return (
            <div className="abilities">
                СИЛ<div style={{width: this.getStringWidth(this.state.ability.Strength)}}></div>
                ЛОВ<div style={{width: this.getStringWidth(this.state.ability.Dexterity)}}></div>
                ТЕЛ<div style={{width: this.getStringWidth(this.state.ability.Constitution)}}></div>
                ИНТ<div style={{width: this.getStringWidth(this.state.ability.Intelligence)}}></div>
                МДР<div style={{width: this.getStringWidth(this.state.ability.Wisdom)}}></div>
                ХАР<div style={{width: this.getStringWidth(this.state.ability.Charisma)}}></div>

            </div>
        );
    }
}

export default MiniAbilities