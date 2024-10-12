const fabricantes = ['Mercedes', 'Audi', 'BMW']

const imprimir = function (nome, indice) {
    console.log((indice + 1) + '.' + nome)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function (a) {
    console.log(a)
})