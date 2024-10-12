const apenasPares = function (array) {
    let pares = array.filter( e => e % 2 == 0 && array.indexOf(e) % 2 == 0)
    return pares
}

console.log(apenasPares([1, 2, 3, 4]))
console.log(apenasPares([10, 70, 22, 43]))