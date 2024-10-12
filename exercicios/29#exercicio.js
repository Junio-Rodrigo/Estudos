// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações

const intervalo = function () {
    let entre = 0
    let outro = 0
    for (i in arguments) {
        if (arguments[i] > 10 && arguments[i] < 20) {
            entre++
        }
       else {
        outro++
       } 
    }
    return `${entre} estão entre o intervalo de 10 e 20 e ${outro} estão fora dele`
}
console.log(intervalo(13, 14, 4 , 6, 18))