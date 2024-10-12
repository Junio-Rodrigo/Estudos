const gerarNumeroEntre = function (min, max, tempo = 0) {
    if (min > max) [min, max] = [max, min]
    const num = parseInt(Math.random() * (max - min + 1) + min)
    return new Promise( resolve => {
        setTimeout(() => resolve(num),tempo)
    })
}

gerarNumeroEntre(0, 10, 1000)
    // .then(console.log)

const gerarVariosNumeros = function () {
    return Promise.all([
        gerarNumeroEntre(0, 10, 2000),
        gerarNumeroEntre(0, 10, 2000),
        gerarNumeroEntre(0, 10, 2000)
    ])
}

gerarVariosNumeros().then(console.log)