const gerarNumero = function (min, max, numerosProibidos) {
    if (min > max) {
        [min, max] = [max, min]
    }
    return new Promise( (resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min) 
        if (numerosProibidos.includes(aleatorio)) reject('Numero repetido!') 
        else resolve(aleatorio)
    }) 
}

// gerarNumero(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)

const gerarMegaSena = async function (quantiaNums, tentativas = 1) {
    const nums = []
    try {
        for (let _ of Array(quantiaNums).fill()) {
            nums.push( await gerarNumero(1, 60, nums))
        }
        return nums
    }catch(erro) {
        if(tentativas > 10) throw 'Não deu certo'
        else return gerarMegaSena(quantiaNums, tentativas + 1)
    }
}

gerarMegaSena(6).then(console.log).catch(console.log)