const nomeDoMes = n => {
    const mezes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return mezes[n - 1]
}

console.log(nomeDoMes(1))
console.log(nomeDoMes(4))