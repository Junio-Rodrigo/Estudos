// Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
// ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
// para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

const maiorMenor = function (min = 0, max = 100) {
    impares = []
    if (min > max || max < min) {
        let min2 = min
        var min = max
        var max = min2
    }

    for (let c = min; c<max+1; c++) {
        if (c % 2 == 1) {
            impares.push(c)
        }
    }
    return impares
}
console.log(maiorMenor(45, 0))