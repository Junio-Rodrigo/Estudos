module.exports = {
    saudacao (...nomes) {
        return nomes.map(nome => `Boa semana ${nome}!`)
    }
}