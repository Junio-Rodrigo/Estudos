const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos de um array

// adicionando...
pilotos.splice(2, 0,'Bottas', 'Massa')
console.log(pilotos)

// Removendo...
pilotos.splice(3, 1) // Massa quebro :(
console.log(pilotos)

const novaListDPilotos1 = pilotos.slice(2) // Novo array!
console.log(novaListDPilotos1)

const novaListDPilotos2 = pilotos.slice(1, 4)
console.log(novaListDPilotos2)

// pop, shift, unshift, splice, slice e push