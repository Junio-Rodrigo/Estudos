// Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

const aluno = (cod, not1, not2, not3) => {
    media = (not1 + not2 + not3) / 3
    if (media < 5) {
        resul = 'Reprovado'
    }
    else {
        resul = 'Aprovado'
    }
    return `O seu código de aluno é ${cod} sua media é ${media.toFixed(1)} e você foi ${resul}`   
}
console.log(aluno(123, 8, 4.4, 3))