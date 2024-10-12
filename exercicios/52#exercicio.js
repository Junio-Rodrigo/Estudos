const removerPropriedade = function (obj, remover) {
    delete obj[remover]
    return obj
}
console.log(removerPropriedade({
    id: 20,
    nome: 'caneta',
    descricao: 'Não preenchido'
}, "descricao"))

console.log(removerPropriedade({a: 1, b: 2}, 'a'))

