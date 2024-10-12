const contadorDePalavras = function (frase) {
    let array = frase.split('')
    array = array.filter(e => ' ' == e)
    return array.length + 1
    }

console.log(contadorDePalavras('Sou uma frase'))
console.log(contadorDePalavras('Me divirto aprendendo a programar'))