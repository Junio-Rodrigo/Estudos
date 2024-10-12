const inverso = function (valor) {
    if (valor === true || valor === false) {
        return Boolean(valor - 1)
    }
    else if (valor.__proto__ === Number.prototype ) {
        return valor *-1
    }
    else {
        return `Booleanos e numeros esperado, mas o parâmetro é do tipo ${typeof valor}`
    }
}

console.log(inverso(true))
console.log(inverso('6'))
console.log(inverso(-2000))
console.log(inverso('Programação'))
