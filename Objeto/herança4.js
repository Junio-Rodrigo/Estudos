const meuObjeto = function () {}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto.prototype === obj1.__proto__)

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function () {
    console.log(`Oi, meu nome é ${this.nome}!`)
}
meuObjeto.prototype.falar()

obj1.nome = 'Rafael'
obj1.falar()

obj2.nome = 'Junio'
obj2.falar()

// 1. Modo
const obj3 = Object.create(meuObjeto.prototype)

// 2. modo
// const obj3 = {}
// obj3 = meuObjeto.prototype

obj3.nome = 'Obj3'
obj3.falar()

// resumindo a loucura...
console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
console.log(meuObjeto.prototype.__proto__ === Object.prototype)