const primeiroEultimo = (array) => {
    let newArray = [array[0],array[array.length - 1]]
    return newArray
}
console.log(primeiroEultimo(['Junio', 4, 7, 'oi', 'O foda']))