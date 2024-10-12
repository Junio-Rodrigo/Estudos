const fs = require('fs')

const lerArquivo = function (arquivo) {
    const caminho = __dirname + `/${arquivo}`
    return new Promise( resolve => {
        fs.readFile(caminho, 'utf-8', (erro, conteudo) => {resolve(conteudo.toString())})
    } )
}

lerArquivo('dados.txt')
    .then(txt => txt = txt.split('  '))
    .then(txt => txt = txt[0].replace('\n', ', '))
    .then(txt => txt = txt.replace('\r', ''))
    .then(txt => `O valor do arquivo é: ${txt}`)
    .then(console.log)
