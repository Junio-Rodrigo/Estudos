console.log(typeof [])

let aprovados = new Array('Ana', 'Carlos', 'Bia')
console.log(aprovados)

console.log(aprovados[0])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Ana', 'Carlos', 'Bia']
aprovados.splice(1, 1)
console.log(aprovados)

// splice, array é um objeto especial e ao invés de atributos(keys) utiliza-se índices