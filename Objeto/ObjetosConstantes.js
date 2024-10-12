// pessoa -> 123 -> {...}
const pessoa = {nome: 'Junio'}
pessoa.nome = 'Vítor'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Junio'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua abc'
delete pessoa

console.log(pessoa.nome)
console.log(pessoa)
