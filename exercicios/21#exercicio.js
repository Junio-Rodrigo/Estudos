const conveniado = (idade) => {
    taxaBase = 100
    if (idade <= 10) {
        adicional = 80
    }
    else if (idade > 10 && idade <= 30) {
        adicional = 50
    }
    else if (idade > 30 && idade <= 60) {
        adicional = 95
    }
    else if (idade > 60) {
        adicional = 130
    }
    return 'R$'+ (taxaBase + adicional)
}

console.log(conveniado(100))