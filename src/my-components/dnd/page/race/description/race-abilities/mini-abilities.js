import React from "react";
import './mini-abilities.css'
import MiniAbility from "./mini-ability/mini-ability";
import PreviewText from "./preview-text/preview-text";

class MiniAbilities extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ability: {
                Strength: 0,
                Dexterity: 0,
                Constitution: 0,
                Intelligence: 0,
                Wisdom: 0,
                Charisma: 0
            },
            additionalAbility: {
                Strength: 0,
                Dexterity: 0,
                Constitution: 0,
                Intelligence: 0,
                Wisdom: 0,
                Charisma: 0
            },
            freeAbilityPointsMax: 0,
            freeAbilityPoints: 0
        }
        this.names = [
            'СИЛ',
            'ЛОВ',
            'ТЕЛ',
            'ИНТ',
            'МДР',
            'ХАР',
        ]
        this.previewText = React.createRef()
        this.upByFreePoint = this.upByFreePoint.bind(this)
        this.downByFreePoint = this.downByFreePoint.bind(this)
        this.race = null
    }

    setAbilities(race) {
        this.race = race
        this.setState({
            ability: race.ability,
            additionalAbility: race.additionalAbility,
            freeAbilityPointsMax: race.freeAbilityPointsMax,
            freeAbilityPoints: race.freeAbilityPoints
        })
        if (this.state.freeAbilityPointsMax !== 0) {

        }
    }

    /**
     * Улучшает характеристику за доп. очки, возвращает возможность действия
     * */
    upByFreePoint(abilityString) {
        if(this.state.freeAbilityPointsMax !== 0) {
            if(this.state.freeAbilityPoints !== 0) {
                let tmpAbility = Object.assign({}, this.state.additionalAbility)
                tmpAbility[abilityString] += 1
                this.race.incAbility(abilityString)
                // alert(this.race.additionalAbility[abilityString])
                this.setState({
                    freeAbilityPoints: this.state.freeAbilityPoints-1,
                    additionalAbility: tmpAbility
                }, ()=>(this.forceUpdate()))
                return true
            }
        }
        return false
    }

    downByFreePoint(abilityString) {
        let tmpAbility = Object.assign({}, this.state.additionalAbility)
        tmpAbility[abilityString] -= 1
        this.race.decAbility(abilityString)
        this.setState({
            freeAbilityPoints: this.state.freeAbilityPoints+1,
            additionalAbility: tmpAbility
        }, ()=>(this.forceUpdate()))
    }

    render() {
        var names_ind = 0
        return (
            <div className="abilities-race-main-div">
                <PreviewText
                    ref={this.previewText}
                    pointsMax={this.state.freeAbilityPointsMax}
                    points={this.state.freeAbilityPoints}
                />
                <div className="abilities-race">
                    {Object.keys(this.state.ability).map( (ability) =>
                        <MiniAbility
                            name={this.names[names_ind++]}
                            type={ability}
                            value={this.state.ability[ability]}
                            addValue={this.state.additionalAbility[ability]}
                            up={this.upByFreePoint}
                            down={this.downByFreePoint}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default MiniAbilities