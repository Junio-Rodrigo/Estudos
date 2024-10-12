// Armazena uma função em uma variável
const Jcompost = function (c, tx = 0.1075, t = 1) {
    return (c*(1+tx)**t)
}
console.log(Jcompost(100).toFixed(1))


//Armazena uma função arrow em uma variável
const Jcompost2 = (c, tx = 0.1075, t = 1) => {
    return (c*(1+tx)**t)
}
console.log(Jcompost2(100).toFixed(1))

//retorno implícito

const Jcompost3 =(c, tx = 0.1075, t = 1) => (c*(1+tx)**t)
console.log(Jcompost3(100).toFixed(1))