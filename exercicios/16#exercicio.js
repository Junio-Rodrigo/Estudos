// Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica, o programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores

const calculadora = (num1, operacao, num2 ) => {
    switch (operacao){
        case 'x':
            return num1 * num2
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '/':
            return num1 / num2
        case '**':
            return num1 ** num2
    }
}
console.log(calculadora(10, '/', 10))