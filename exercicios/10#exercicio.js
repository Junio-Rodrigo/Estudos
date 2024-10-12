const divisível3 = (valor) => {
    if (valor == 0) {
        return false
    }
    if (valor % 3 == 0) {
        return true
    }
    else {
        return false
    }
}
console.log(divisível3(3))
console.log(divisível3(2))
console.log(divisível3(150))