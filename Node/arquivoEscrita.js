const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.19
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), erro => {
    console.log(erro || 'Arquivo Salvo!')
})