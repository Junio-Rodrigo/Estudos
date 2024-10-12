let valor
console.log(valor)//não inicializada

valor= null//ausência de valor
console.log(valor)

//console.log(valor.toString()) //ERRO!

produto= {}
console.log(produto.preco)
console.log(produto)
produto.preco= 3.50
console.log(produto)
produto.preco= undefined// evite utilizar undefined
console.log(produto)
console.log(!!produto)
console.log(!!produto.preco)

produto.preco=null//sem preço
console.log(!!produto.preco)
console.log(produto)
