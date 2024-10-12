const jurosS = function (C, T, Te) {
    console.log(`Juros simples: ${(C + (C / 100 * T * Te)).toFixed(2)}`)
}
jurosS(3600, 10, 2)

const jurosC = function (C, T, Te) {
    console.log(`Juros compostos: ${(C * ( (1+ T/100)**Te )).toFixed(2)}`)
}
jurosC(3600, 10, 10)