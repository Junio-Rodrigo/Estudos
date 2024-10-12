const monetario = function (valor) {
    valor = valor.toFixed(2).toString().replace('.', ',')
    console.log(`R$${valor}`)
}
monetario(29.0154)