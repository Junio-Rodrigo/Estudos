// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor

const maiorEmenor = function () {
    let maior = 0
    let menor = Infinity

    for (let i in arguments) {
        if (arguments[i] < menor) {
            menor = arguments[i]
        }
        if (arguments[i] > maior) {
            maior = arguments[i]
        }
    }
    return `O menor número foi ${menor} e o maior número foi ${maior}`
}
console.log(maiorEmenor(2, 5, 7, 9))