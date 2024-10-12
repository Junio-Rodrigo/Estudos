const jogoNumAleatorio = function (n) {
    let num = Math.random().toFixed(1) * 10
    if (n == num) {
        return 'Parabéns!'
    }
    else {
        return 'Que pena!'
    }
}

console.log(jogoNumAleatorio(10))
console.log(jogoNumAleatorio(5))
console.log(jogoNumAleatorio(5))