const repetir = function (rep, quan) {
    let array = []
    for (let i = 0; i<quan; i++) {
        array.push(rep)
    }
    return array
}

console.log(repetir('código', 2))
console.log(repetir(7, 3))