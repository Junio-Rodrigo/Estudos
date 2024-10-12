const simboloMais = function (n) {
    let mais = ''
    for (let i = 0; i<n; i++) {
        mais = mais + '+'
    }
    return mais
} 
console.log(simboloMais(2))
console.log(simboloMais(4))