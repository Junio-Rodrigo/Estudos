const turmas = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.8
    }]}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Roberto',
        nota: 6.8
    }, {
        nome: 'Rafaele',
        nota: 5.7
    }]
}]

const getNotaDoAluno = (aluno) => aluno.nota
const getNotaDaTurma = (turma) => turma.alunos.map(getNotaDoAluno)

let notas = turmas.map(getNotaDaTurma)
console.log(notas)

Array.prototype.flatMap = function (funcao) {
    return Array.prototype.concat.apply([], this.map(funcao))
}

const notas2 = turmas.flatMap(getNotaDaTurma)
console.log(notas2)