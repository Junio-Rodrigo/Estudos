let a = 1
console.log(a)

const primeiroElemento = array => array[0]
const primeiraLetra = palavra => palavra[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise( function (cumprirPromessa) {
    cumprirPromessa(['Junio', 'Vítor', 'Leonardo'])
})
.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log)
