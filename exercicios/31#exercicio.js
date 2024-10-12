// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

const negativos = function () {
    let negativos = 0
    for (let i in arguments) {
        if (arguments[i] < 0){
            negativos++
        }
    }
    return `A quantidade de números negativos neste vetor é de ${negativos}`
}

console.log(negativos(-3, -5 ,-7 ,8))