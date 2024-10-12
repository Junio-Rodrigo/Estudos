const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach((nome, indice, array) => {
    console.log(`${indice + 1}º ${nome}`)
    console.log(array)
})
 
aprovados.forEach(nome => {
    console.log(nome)
})

const exibirAprovados = (aprovado) => {
    console.log(aprovado)
}
console.log()
aprovados.forEach(exibirAprovados)