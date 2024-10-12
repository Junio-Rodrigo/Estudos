Array.prototype.reduce2 = function (funcao) {
    let acumulador = this[0]
    for (let i = 1; i<this.length; i++) {
        acumulador = funcao(acumulador, this[i])
    }
    return acumulador
}

const alunos = [
    {nome: 'Junio', nota: 10, bolsista: true},
    {nome: 'Fernando', nota: 7, bolsista: false},
    {nome: 'Garcia', nota: 7.8, bolsista: false},
    {nome: 'Vítor', nota: 9.6, bolsista: true},
]

let soma = alunos.map(a => a.nota).reduce2((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual 
})
console.log(soma)



// let fatorial = (f = 5) => {
//     let array = []
//     for (let i = 1; i<=f; i++) {
//         array.push(i)
//     }
//     return array
// }
// console.log(fatorial(6).reduce((acumulador, a) => {
//     return acumulador * a
// }))