const alunos = [
    {nome: 'João', nota: 7.8},
    {nome: 'Ana', nota: 8.9}
]

// Imperativos
let total = 0 // 1. forma
for (let i = 0; i<alunos.length; i++) {
    total += alunos[i].nota
}
console.log(total / alunos.length)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (acumulador, atual) => acumulador + atual
total = alunos.map(getNota).reduce(soma) // 2. forma
console.log(total / alunos.length)