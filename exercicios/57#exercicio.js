const somaNums = function (array) {
    let soma = array.reduce( ( a, e ) => a + e)
    return soma
}

console.log(somaNums([10, 10, 10]))
console.log(somaNums([15, 15, 15, 15]))
