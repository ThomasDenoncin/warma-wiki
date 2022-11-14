import { abilityExceptions, advantageExceptions, litteralTable } from "./const"

export function parseAbility (string) {
    return parseDynamicValue(string)    
}

export function parseAdvantage (string) {
    if (string.includes('Power Attack')) {
        return parsePowerAttack(string)
    }
    if (string.includes('Critical')) {
        return parseCritical(string)
    }
    if (string.includes('Continous Effect')) {
        return parseContinousEffect(string)
    }
    if (string.includes('Resistance')) {
        return parseResistance(string)
    }
    if (string.includes('Damage Type')) {
        return parseDamageType(string)
    }
    if (string.includes('[')) {
        return parseDynamicValue(string)
    }
    return { label: string }
}

function parseValue (string, regex) {
    return regex.exec(string)
} 

function parsePowerAttack (string) {
    let value = parseValue(string, /(\w+) Power Attack/)
    if (value === null) return { label: string }
    return { 
        label: string.slice(value[1].length + 1), 
        value: value[1],
    }
}

function parseCritical (string) {
    let value = parseValue(string, /Critical (\w+)/)
    if (value === null || advantageExceptions.includes(string)) return { label: string }
    return { 
        label: string.slice(0, -(value[1].length + 1)), 
        value: value[1],
    }
}

function parseContinousEffect (string) {
    let value = parseValue(string, /Continous Effect: (\w+)/)
    if (value === null) return { label: string }
    return { 
        label: string.slice(0, -(value[1].length + 2)), 
        value: value[1],
    }
}

function parseResistance (string) {
    let value = parseValue(string, /Resistance: (\w+)/)
    if (value === null || advantageExceptions.includes(string)) return { label: string }
    return { 
        label: string.slice(0, -(value[1].length + 2)), 
        value: value[1].toLowerCase(),
    }
}

function parseDamageType (string) {
    let value = parseValue(string, /Damage Type: (\w+)/)
    if (value === null) return { label: string }
    const extratedValue = value[1].toLowerCase()
    const litteralValue = litteralTable[extratedValue] || extratedValue
    return { 
        label: string.slice(0, -(value[1].length + 2)), 
        value: litteralValue,
    }
}

function parseDynamicValue (string) {
    let value = parseValue(string, /\[.+\]/)
    if (value === null || abilityExceptions.includes(string)) return { label: string }
    return { 
        label: string.slice(0, -(value[0].length + 1)), 
        value: value[0].slice(1, value[0].length - 1),
    }   
}