// Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
// bem como a soma dos elementos.

const progressao = function (termos, ter1, razao) {
    let termo = ter1
    resultado = []
    for (let c = 0; c < termos; c++) {
        termo = termo + razao
        resultado.push(termo)
    }
    return resultado
}
console.log(progressao(4, 4, 10))