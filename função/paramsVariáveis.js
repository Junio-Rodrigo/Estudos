function soma() {
    let soma = 0
    for (i in arguments)
    soma += arguments[i]
return soma
}
console.log(soma())
console.log(soma(4))
console.log(soma( 1, 4, 6, 8, 4, 6, 7, 2, 5, 2.4, 3.65))
console.log(soma(' a','b','c'))