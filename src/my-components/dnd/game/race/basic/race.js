class Race {
    constructor() {
         this.ability = {
             Strength: 0,
             Dexterity: 0,
             Constitution: 0,
             Intelligence: 0,
             Wisdom: 0,
             Charisma: 0
        }
        this.additionalAbility = {
            Strength: 0,
            Dexterity: 0,
            Constitution: 0,
            Intelligence: 0,
            Wisdom: 0,
            Charisma: 0
        }
        this.name = ""
        this.freeAbilityPoints = 0
        // оставшиеся ячейки характеристик
        this.freeAbilityPointsMax = 0
        // возможность выбора характеристики для её увеличения
        this.level = 1
        this.speed = 0
        this.armorClass = 10
        this.initiative = 0
        this.skills = {

        }

        // массив для супер-классов, для импорта информации из списка
        this.subraces = []
        // раса первой показывается, если есть subraces
        this.firstRace = null

        this.incAbility = this.incAbility.bind(this)
        this.decAbility = this.decAbility.bind(this)
    }

    levelUp() {
        this.level++
    }

    getAbilities() {
        return this.ability
    }

    getHitPointsMaxBonus() {
        return 0;
    }

    incAbility(ability) {
        this.freeAbilityPoints -= 1
        this.additionalAbility[ability] += 1
    }

    decAbility(ability) {
        this.freeAbilityPoints += 1
        this.additionalAbility[ability] -= 1
    }
}

export default Race