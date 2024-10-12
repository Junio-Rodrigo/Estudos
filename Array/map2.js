const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// retornar um array com os preços

let precos = carrinho.map((e, i) => {
    e = JSON.parse(e)
    return e.preco
})
console.log(precos)