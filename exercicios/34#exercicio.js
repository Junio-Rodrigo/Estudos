const comparar = (str, str2) => {
    let letras = 0
    str2 = str2.toLowerCase()
    str = str.toLowerCase()

    for (let i in str) {
        for (let e in str2) {
            if (str[i] == str2[e]) {
                letras++
            }
        }
    }
    if (letras != str2.length || letras == 0) {
        return false
    }
    if (letras == str2.length) {
        return true
    }
}
console.log(comparar('oi', 'oi'))
console.log(comparar('hello', 'world'))
console.log(comparar('f', 'F'))
