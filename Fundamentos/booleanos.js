let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 0
console.log(!!isAtivo)
console.log()
console.log("Os verdadeiros")
console.log()

console.log(!!3)
console.log(!!-1)
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 1))
console.log()
console.log('Os falsos')
console.log()
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!(''|| null || 0 || '' ))


let nome= 0
let junio= 1
console.log( junio && nome)