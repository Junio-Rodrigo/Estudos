const selecao = (nota) => {
    if (nota < 38) {
        return `Sua nota foi ${nota} e você foi Reprovado!`
    }
    else if (nota >= 38) {
        if (nota % 10 >= 5 && nota % 10 < 8) {
            arredondamento = nota
        }
        else if (nota % 10 >= 5){
            arredondamento = Math.ceil(nota / 10)
            arredondamento *= 10
        }
        else{
            if (nota % 10 >= 3){
            arredondamento = Math.floor(nota / 10)
            arredondamento *= 10
            arredondamento += 5
            }
            else {
            arredondamento = nota
            }
        }
        if (arredondamento < 40) {
            resul = 'Reprovado'
        }
        else{
            resul = 'Aprovado'
        }
        return `Sua nota foi ${arredondamento} e você foi ${resul}`
    }
}
console.log(selecao(100))
console.log(selecao(30))
console.log(selecao(38))
console.log(selecao(88))
console.log(selecao(68))