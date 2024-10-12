// ES8: Object.values / Objects.entries
const obj = { a: 1, b: 2, c: 3 }

console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(Object.keys(obj))

// Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return `Ola gente`
    }
}

console.log(pessoa.nome)
console.log(pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    latir() {
        return 'Au Au'
    }
}
const cachorro = new Cachorro
console.log(cachorro.latir())

