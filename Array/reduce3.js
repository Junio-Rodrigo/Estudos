Array.prototype.reduce2 = function (funcao, mais) {
    let indiceInicial = mais ? 0 : 1
    let acumulador = mais || this[0]
    for (let i = indiceInicial; i<this.length; i++) {
        acumulador = funcao(acumulador, this[i])
    }
    return acumulador
}
const alunos = [
    {nome: 'Junio', nota: 10, bolsista: false},
    {nome: 'Fernando', nota: 7, bolsista: true},
    {nome: 'Garcia', nota: 7.8, bolsista: true},
    {nome: 'Vítor', nota: 9.6, bolsista: true},
]


let todosBolsistas = (resultados, bolsista) => resultados && bolsista
console.log(alunos.map(a => a.bolsista).reduce2(todosBolsistas))

let algumBolsista = (resultados, bolsista) => resultados || bolsista
console.log(alunos.map(a => a.bolsista).reduce2(algumBolsista))

const nums = [1, 2, 3, 4, 5]
let soma = nums.reduce2((a, n) => a + n)
console.log(soma)