// Arrow function
const soma = (a, b) => a + b
console.log(soma(7, 7))

const lexico1 = () => console.log(this === module.exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parâmetros default

function log (texto = 'Node') {
    console.log(texto)
}

log()
log('Xique-Xique Bahia')

// Operador rest
const total = function (...numeros){
    let soma = numeros.reduce( (a, at) => a + at)
    console.log(soma)
}
total(2, 3, 4, 5)