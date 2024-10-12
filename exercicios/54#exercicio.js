const objetoParaArray = function (obj) {
    return Object.entries(obj)
}

console.log(objetoParaArray({
    nome: 'Cleide',
    idade: 87,
    sobrenome: 'Silva'
}))