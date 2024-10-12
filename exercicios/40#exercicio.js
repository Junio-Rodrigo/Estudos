// Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.

const notas = function (notas) {
    for (let i = 0; i<notas.length; i++) {
        if (notas[i] < 5){
            resultado = 'D'
        }
        else if (notas[i] < 7) {
            resultado = 'C'
        }
        else if (notas[i] < 9) {
            resultado = 'B'
        }
        else {
            resultado = 'A'
        }
        console.log(`A nota ${notas[i]} é ${resultado}`)
    }
}

notas([4, 7, 9, 2, 6, 4.9, 8.9])