function real(partes, ...valores) {
    const resultado = []
    valores.forEach( (valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}
const precoDaTv = 1256.7
const precoPratos = 126
console.log(real `Hoje eu fui no mercadinho eu comprei por apenas ${precoDaTv} uma tv de 47 polegadas e dps comprei 
algums pratos por apenas ${precoPratos}`)