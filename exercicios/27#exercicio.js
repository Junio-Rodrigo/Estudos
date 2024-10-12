// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

const calculoCrescimento = (altura1, taxaDecres1, altura2, taxaDecres2) => {
    if (altura1 < altura2) {
        menor = altura1
        if (taxaDecres1 > taxaDecres2) {
            return `A criança menor poderá ultrapassar a maior em ${((altura2 - altura1) / taxaDecres1).toFixed(0)} ano(s).`
        }
    }
    else {
        menor = altura2
        if (taxaDecres1 < taxaDecres2) {
            return `A criança menor poderá ultrapassar a maior em ${((altura1 - altura2) / taxaDecres2).toFixed(0)} ano(s).`
        }
    }
}
console.log(calculoCrescimento(139, 30, 170, 3))