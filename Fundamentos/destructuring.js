const pessoa = { nome: 'junio', idade: 14, endereço: { Rua: 'Rua agnaldo Fernandez dos Santos', numero: 520 } }
const {endereço, idade} = pessoa
console.log(endereço, idade)

const array = ['oi', 2]
const eai = array[0]
console.log(eai)

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const n = {max: 100, min: 10 }
console.log(rand(n))