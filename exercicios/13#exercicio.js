// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

const diaDaSemana = (dia) => {
    switch (dia) {
        case 1:
            return 'É Fim de semana! (Domingo)'
        case 2:
            return 'É Dia útil (Segunda-Feira)'
        case 3:
            return 'É Dia útil (Terça-Feira)'
        case 4:
            return 'É Dia útil (Quarta-Feira)'
        case 5:
            return 'É Dia útil (Quinta-Feira)'
        case 6:
            return 'É Dia útil (Sexta-Feira)'
        case 7:
            return 'É Fim de semana! (Sábado)'
        default:
            return 'Dia da semana inválido'
    }
}
console.log(diaDaSemana(7))