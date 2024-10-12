const alunos = [
    {nome: 'Junio', nota: 10, bolsista: false},
    {nome: 'Fernando', nota: 7, bolsista: false},
    {nome: 'Garcia', nota: 7.8, bolsista: false},
    {nome: 'Vítor', nota: 9.6, bolsista: false},
]

// Desafio 1: Todos os alunos são bolsistas?
let todosBolsistas = (resultados, bolsista) => resultados && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno bolsista?
let algumBolsista = (resultados, bolsista) => resultados || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))