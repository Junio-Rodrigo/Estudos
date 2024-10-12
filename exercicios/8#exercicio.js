let lista = function () {
    let recorde = 0
    let quebras = 0
    let pior = Infinity

    for (let i in arguments) {
        if (arguments[i] > recorde) {
            recorde = arguments[i]
            quebras++
        }
        else if (arguments[i] < pior) {
            pior = arguments[i]
            posP = i 
        }
    }
    quebras--
    posP++
    console.log(`Bateu o recorde ${quebras} veze(s)`)
    console.log(`O pior jogo foi ${posP}ª partida`)
}
lista(30, 40, 20, 4, 51, 25, 42, 38, 56, 0)