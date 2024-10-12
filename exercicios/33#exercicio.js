const uniao = (vetorInt, vetorStr, vetorDouble) => {
    console.log(vetorInt + vetorStr + vetorDouble)
    console.log(vetorInt.concat(vetorStr).concat(vetorDouble))
}

uniao([1, 4, 6, 7], ['oi', 'eu','sou', 'junio'], [1.7, 0.5, 1.976, 3.5])