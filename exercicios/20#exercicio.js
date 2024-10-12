const banco = (valor) => {
    cedulas100 = valor / 100 - (valor % 100) / 100 + ' cédula(s) de R$100'
    cedulas50 = (valor % 100) / 50 - (valor % 50) / 50 + ' cédula(s) de R$50'
    cedulas10 = (valor % 50) / 10 - (valor % 10) / 10 + ' cédula(s) de R$10'
    cedulas5 = (valor % 10) / 5 - (valor % 5) / 5 + ' cédula(s) de R$5'
    cedulas1 = (valor % 5) / 1 + ' cédula(s) de R$1'
    console.log(`${cedulas100}
${cedulas50} 
${cedulas10}
${cedulas5}
${cedulas1}`)
}
banco(153)