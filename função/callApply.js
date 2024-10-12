function getPreco(imposto = 0, moeda = 'R$') {
    return `${this.nome} - ${moeda}${(this.preco * (1 - this.desc) * (1 + imposto)).toFixed(2)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4578,
    desc: 0.15
}


console.log(getPreco.call(produto))
console.log(produto)

console.log(getPreco.call(produto, 0.17, '$'))
console.log(getPreco.apply(produto, [0.10, '$']))