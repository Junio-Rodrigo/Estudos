function melhorMedia(alunos) {
    let notasAlunos = Object.values(alunos)
    let soma = notasAlunos.map(e => e.reduce( (acu, n) => acu + n))
    let medias = soma.map( (num, i) => num/notasAlunos[i].length)
    const maior = medias.reduce( (maior, num) => maior < num ? maior = num : maior = maior)
    const posMaior = medias.indexOf(maior)
    return `A melhor aluno é ${Object.keys(alunos)[posMaior]} com ${maior} de média`
}

console.log(
    melhorMedia({
        'Junio': [9, 7, 2, 7],
        'Haniel': [7, 2, 2, 9],
        'João': [3, 6, 9, 10, 0, 0, 0]
    })
)