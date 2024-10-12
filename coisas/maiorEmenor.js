const numeros = [1, 54, 2, 11, 1, -546]
const maior = numeros.reduce( (a, num) => {
    return a > num ? a : num
})
const menor = numeros.reduce( (a, num) => {
    return a < num ? a : num
})

console.log(`O menor número foi ${menor} e o maior numero foi ${maior}`)