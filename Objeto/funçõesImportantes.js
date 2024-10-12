const pessoa = {
    nome: 'Ânderson',
    peso: 49,
    idade: 15
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true,
    writable: false,
    value: '02/10/2009'
})
pessoa.dataDeNascimento = '01/10/2009'
console.log(pessoa.dataDeNascimento)

// Object.assign (EQMAScript 2015) 

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }

Object.assign(dest, o1, o2)
console.log(dest)

Object.freeze(dest)
dest.a = 'lá ele'
console.log(dest)