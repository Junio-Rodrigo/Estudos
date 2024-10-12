const estaEntre = function (num, min, max, inclusivo = false) {
    if (inclusivo) {
    return num <= max && num >= min
    }
    return num < max && num > min
}

console.log(estaEntre(10, 50, 100))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 3, 150))
console.log(estaEntre(3, 3, 150, true))