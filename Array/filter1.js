const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

// A sintaxe
console.log(produtos.filter(p => p.preco > 2500))

// Meu script
let produtosFrageisEcaros = produtos.filter(p => p.preco > 20 && p.fragil)
console.log(produtosFrageisEcaros)

// O do curso
let caros = p => p.preco > 20
let frageis = p => p.fragil
produtosFrageiseEcaros = produtos.filter(caros).filter(frageis)
console.log(produtosFrageiseEcaros)