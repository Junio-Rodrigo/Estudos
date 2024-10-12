const multiplicacao = (n1, n2) => {
    let array = []
    for (let i = 0; i<n2; i++) {
        array.push(n1)
    }
    array = array.reduce((acu, atu) => {
        return acu + atu
    }) 
    return array
}

console.log(multiplicacao(5, 5))
console.log(multiplicacao(0, 7))