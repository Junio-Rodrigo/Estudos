// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const media = function () {
    let soma = 0
    let divisor = 0
    for (let i in arguments) {
        soma += arguments[i]
        divisor++
    }
    return soma / divisor
}
console.log(media(3, 6, 8, 3, 7, 3))