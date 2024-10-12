const filtrarNumeros = function (array) {
    let filtro = array.filter(e => e.__proto__ === Number.prototype)
    return filtro
}
console.log(filtrarNumeros(['eu', 1, '2', 30, {}, [], true]))