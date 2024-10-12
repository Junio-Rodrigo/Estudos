const despesasTotais = function (array) {
    let soma = 0
    array.forEach(e => {
        soma += e.preco
    })
    return soma
}
console.log(despesasTotais([{
    nome: 'Jornal online',
    cetegoria: 'Informação',
    preco: 89.99
}, {
    nome: 'Cinema',
    categoria: 'Enretenimento',
    preco: 150
}]
))