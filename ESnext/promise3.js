const gerarNumero = function (min, max) {
    if (min > max) {
        [min, max] = [max, min]
    }
    return new Promise( resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min) 
        resolve(aleatorio)
    }) 
}

gerarNumero(1, 60).then(console.log)