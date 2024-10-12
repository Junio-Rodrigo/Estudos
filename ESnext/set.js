// Não aceita repetição / não indexada

const times = new Set()
times.add('Vasco')
times.add('São paulo').add('Palmeiras').add('Corinthians')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = [ 'Junio', 'Vítor', 'Leonardo', 'Junio']
const nomesSet = new Set(nomes)
console.log(nomesSet)