let nums = [1, 2, 3, 4, 5]

//for com propósito
let resultado = nums.map(e => {return e * 2})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => {return `R$${parseFloat(e).toFixed(2).replace('.', ',')}`}

let money = nums.map(paraDinheiro)
console.log(money)

let maisVezes = nums.map(triplo) 
console.log(maisVezes)

let somando10 = nums.map(soma10)
console.log(somando10)

console.log()
const resultadoFinal = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultadoFinal)