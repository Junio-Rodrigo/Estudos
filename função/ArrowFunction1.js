let dobro = function (a = 0) {
    return a + a
}
console.log(dobro(100))


dobro = (a) => {
    return 2 * a
}
console.log(dobro(100))


dobro = (a) => 2 * a // return implícito
console.log(dobro(100))