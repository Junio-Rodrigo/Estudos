Array.prototype.forEach2 = function(funcao) {
    for (let i = 0; i<this.length; i++){
        funcao(this[i], i+1, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2((nome, indice) => {
    console.log(`${indice}º ${nome}`)
})