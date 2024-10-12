const notas = [ 10.4, 4.6, 7.9, 8.1, 9.3, 4.5, 2.7, 5.2]

//Sem Callback

const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Com Callback

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter((nota) => nota < 7)
console.log(notasBaixas3)