Array.prototype.map2 = function (funcao) {
    this.array = []
    for (let i = 0; i<this.length; i++) {
        this.array.push(funcao(this[i], i, this))
    }
    return this.array
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// retornar um array com os preços

let precos = carrinho.map2(e => {
    e = JSON.parse(e)
    return e.preco
})
console.log(precos)

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

let resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)