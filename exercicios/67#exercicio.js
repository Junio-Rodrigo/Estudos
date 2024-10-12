const filtrarPelosDigitos = function (nums, digitos) {
    let lista = nums.filter(num => {
        num = num.toString()
        return num.length == digitos
    })
    return lista
}

console.log(filtrarPelosDigitos([32, 2, 365, 10, 125, 11], 2))
console.log(filtrarPelosDigitos([5, 9, 1, 125, 11], 1))