import { parseCategory, parseFaction } from "./parsers.mjs"

export const abilityExceptions = [
    'Field Marshal [Northkin]',
]

export const advantageExceptions = [
    'Resistance: Corrosion',
    'Resistance: Electricity',
    'Resistance: Fire',
    'Critical Disruption',
]

export const litteralTable = {
    'electricity' : 'electrical',
}

export const categories = [
    'warcaster',
    'warlock',
    'warjack',
    'warbeast',
    'unit',
    'solo',
    'weapon attachment',
    'command attachment',
    'command card',
]

export const excludeFromHordeCategories = [
    'warcaster',
    'warjack',
]

export const excludeFromWarmachineCategories = [
    'warlock',
    'warbeast',
]

export const factions = [
    'Cryx',
    'Cygnar',
    'Khador',
    'Protectorate of Menoth',
    'Retribution of Scyrah',
    'Mercenaries',
    'Circle of Orboros',
    'Legion of Everblight',
    'Skorne',
    'Trollbloods',
    'Convergence of Cyriss',
    'Crucible Guard',
    'Grymkin',
    'Infernals',
]

export const ignoreInBreadCrumbs = [
    ...categories.map((category) => parseCategory(category)),
    ...factions.map((faction) => parseFaction(faction)),
]