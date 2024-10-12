const addVetor = (v1, v2) => {
    v1.push('')
    for (let i in v2) {
        console.log(v2[i])
    }
    let vFinal = v1 + v2
    console.log(`Vetor adicionado: ${v2}`)
    console.log(`Vetor resultado: ${vFinal}`)
} 
addVetor([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])