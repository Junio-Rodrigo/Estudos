// let e const 

{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)
// console.log(b) Erro!

// Template string
const produto = 'Ipad'
console.log(`${produto} é caro!`)

// Destructuring 
const [...letras] = 'mi llamo Junio'
console.log(letras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const { idade, nome } = { idade: 17, nome: 'Junio' }
console.log(nome, idade)


