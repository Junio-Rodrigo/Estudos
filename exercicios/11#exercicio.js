const BiAno = (ano) => {
    if (ano % 4 > 0 || ano == 0 || ano % 100 == 0 && ano % 400 != 0) {
        return false
    }
    if (ano % 4 == 0 || ano % 400 == 0) {
        return true
    }
}
console.log(BiAno(0))
console.log(BiAno(4))
console.log(BiAno(100))
console.log(BiAno(400))
console.log(BiAno(800))
console.log(BiAno(2020))
console.log(BiAno(2021))