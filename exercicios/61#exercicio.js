const menorNum = function (nums) {
    menor = Infinity
    nums.forEach(n => {
        if (n < menor) {
            menor = n
        }
    })
    return menor
}

console.log(menorNum([10, 5, 35, 65]))
console.log(menorNum([5, -15, 50, 3]))