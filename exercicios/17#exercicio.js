// Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

const plano = (plano) => {
    switch (plano) {
        case 'A':
            return 'Você recebeu um aumento de 10%'
        case 'B':
            return 'Você recebeu um aumento de 15%'
        case 'C':
            return 'Você recebeu um aumento de 20%'
        default:
            return 'Plano inválido'
    }
}
console.log(plano('C'))