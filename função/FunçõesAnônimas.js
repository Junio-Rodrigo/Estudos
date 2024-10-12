const soma = function (x, y) {
    return x + y
}
const multiplicacao = function (x, y) {
    return x * y
}
const divisao = function (x, y) {
    return x / y
}
//função não anônima (função normal)
// OBS: Também funciona como parâmetro uma função normal sem estar em uma variável como anônima
function potenciacao(x, y) {
    return x ** y
}

const imprimirResultado  = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}
imprimirResultado(2, 10)
imprimirResultado(2, 10, soma)
imprimirResultado(2, 10, function (x, y) {
    return x - y
})

const obj = {
    falar: function () {
        console.log('Olá')
    }
}
obj.falar()