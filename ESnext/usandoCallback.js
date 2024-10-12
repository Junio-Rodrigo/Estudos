// sem promise...
const http = require('http')

const getTurma = (turma, funcao) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`
    let resultado = ''
    http.get( url, res => {
        res.on('data', (dados) => {
            resultado += dados
        })
        res.on('end', () => {
            funcao(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma( 'A', (alunos) => {
    nomes = nomes.concat(alunos.map( (aluno) => `A: ${aluno.nome}`))
    getTurma( 'B', alunos => {
        nomes = nomes.concat(alunos.map( aluno => `B: ${aluno.nome}`))
        getTurma( 'C', alunos => {
            nomes = nomes.concat(alunos.map( aluno => `C: ${aluno.nome}`))
            console.log(nomes)
        })
    })
})