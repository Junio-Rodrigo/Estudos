const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}

const salvarProduto = function (produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}
const getProduto = function (id) {
    return produtos[id] || 'Este id não existe'
}
const getProdutos = function () {
    return Object.values(produtos)
}

const excluirProduto = function (id) {
    const produto = produtos[id]
    delete produto
    return produto
}

module.exports = {
    salvarProduto,
    getProduto,
    getProdutos,
    excluirProduto
}