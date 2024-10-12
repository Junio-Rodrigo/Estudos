// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares

const contagemParImpar = (...args) => {
    let pares = 0
    let impares = 0
    for (let i = 0; i < args.length; i++) {
        if (i % 2 == 0) {
            pares++
        }
        else {
            impares++
        }
    }
    return 'pares: ' + pares + ', impares: ' + impares
}
console.log(contagemParImpar(1, 6, 7, 6, 8, 10, 2))