import MountainDwarf from "./races/MountainDwarf"
import HillDwarf from "./races/HillDwarf"

import HighElf from "./races/HighElf"
import WoodElf from "./races/WoodElf"
import Drow from "./races/Drow"

import LightfootHalfling from "./races/LightfootHalfling"
import StoutHalfling from "./races/StoutHalfling"

import Human from "./races/Human"
import HumanAlt from "./races/HumanAlt"

import Dragonborn from "./races/Dragonborn"

import ForestGnome from "./races/ForestGnome"
import RockGnome from "./races/RockGnome"

import HalfElf from "./races/HalfElf"

import HalfOrc from "./races/HalfOrc"

import Tiefling from "./races/Tiefling"


// Длбавлять сюда расы для соответствия данных из списка и классами рас
var races2subraces = {
    "Дварф": [
        new HillDwarf(),
        new MountainDwarf()
    ],
    "Эльф": [
        new HighElf(),
        new WoodElf(),
        new Drow()
    ],
    "Полурослик": [
        new LightfootHalfling(),
        new StoutHalfling(),
    ],
    "Человек": [
        new Human(),
        new HumanAlt()
    ],
    "Драконорожденный": [
        new Dragonborn()
    ],
    "Гном": [
        new ForestGnome(),
        new RockGnome(),
    ],
    "Полуэльф": [
        new HalfElf()
    ],
    "Полуорк": [
        new HalfOrc()
    ],
    "Тифлинг": [
        new Tiefling()
    ]
}

export default races2subraces