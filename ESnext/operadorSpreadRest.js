// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'João', salario: 12450.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// Usar o spread nos arrays
const grupoA = ['Junio', 'Vítor', 'Garcia']
const grupoFinal = ['Leonardo', 'Diogo', ...grupoA, 'Matheus'] // <= Melhor
const grupoFinal2 = ['Leonardo', 'Diogo', 'Matheus'].concat(grupoA) //<= Pior
console.log(grupoFinal)