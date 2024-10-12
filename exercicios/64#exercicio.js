// const contadorDeCaractere = function (caracte, frase) {
//     let contador = 0
//     for (let i = 0; i<frase.length; i++) {
//         if (caracte == frase[i]) {
//             contador++
//         }
//     }
//     return contador
// }

const contadorDeCaractere = function (caracte, frase) {
    let array = frase.split('')
    array = array.filter(e => caracte == e)
    return array.length
    }

console.log(contadorDeCaractere('r', 'A sorte favorece os audazes'))
console.log(contadorDeCaractere('c', 'Conhece-te a ti mesmo'))