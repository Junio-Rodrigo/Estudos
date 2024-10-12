const anoBissexto = function (ano) {
    return ano % 400 == 0 || ano % 4 == 0 && ano % 100 > 0
}

console.log(anoBissexto(2020))
console.log(anoBissexto(2100))