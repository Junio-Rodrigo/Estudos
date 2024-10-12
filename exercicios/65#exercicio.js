const busca = function (busca, lista) {
    lista = lista.filter(e => e.includes(busca))
    return lista
}

console.log(busca('pro', ['profissional', 'professor', 'geladeira']))