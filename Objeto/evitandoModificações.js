// Object preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
console.log(produto)
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {nome: 'Juliana', idade: 17}
Object.seal(pessoa)

pessoa.nome = 'Junio'
delete pessoa.nome
pessoa.imc = 21
console.log(pessoa)

// Object.frezze = selado + valores constantes