// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

let multiplicacao = function (vetor, int) {
    resultado = []
    for (let i = 0; i<vetor.length; i++) {
        resultado.push(vetor[i] * int)
    }
    return resultado
}
console.log(multiplicacao([2, 5, 7, 9, 3], 2))

let multiplicacao5 = function (vetor, int) {
    resultado = []
    for (let i = 0; i<vetor.length; i++) {
        if (vetor[i] > 5) {
            resultado.push(vetor[i] * int)
        }
        else {
            resultado.push(vetor[i])
        }
    }
    return resultado
}
console.log(multiplicacao5([2, 5, 7, 9, 3], 2))