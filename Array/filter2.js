Array.prototype.filter2 = function (funcao) {
    let array = []
    for (let i = 0; i<this.length; i++) {
        if (funcao(this[i], i, this)) {
            array.push(this[i])
        }
    }
    return array
} 

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

let produtosFrageisEcaros = produtos.filter2(p => p.preco > 20 && p.fragil)
console.log(produtosFrageisEcaros)

let caros = p => p.preco > 20
let frageis = p => p.fragil
produtosFrageisEcaros = produtos.filter2(caros).filter2(frageis)
console.log(produtosFrageisEcaros)