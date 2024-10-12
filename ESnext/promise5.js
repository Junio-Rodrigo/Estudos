const funcionaOuNão = function (valor = 'oi', chanceErro = 50) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro / 100)  reject('Ocorreu um erro')
        else resolve(`Valor: ${valor}`)
    })
}

funcionaOuNão('Eai, tudo bem?', 50)
    .then(v => console.log(v), 
    err => console.log(`Erro Esp.: ${err}`)    
)
    .catch( err => console.log(`Erro geral: ${err}`))
    .then(console.log('Fim!'))