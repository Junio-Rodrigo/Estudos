const fatorial = (valor) => {
    fa = 1
    for (m = 2; m <= valor; m++) {
        fa = m * fa 
    }
    return fa
}
console.log(fatorial(10))