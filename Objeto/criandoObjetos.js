// usando notação literal

const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construroras
function produto(nome = 0, preco = 0, desc = 0) {
    this.nome = nome
    this.preco = preco
    this.precoComDesc = () => {
        return preco * (1 - desc)
    }
}
const p1 = new produto('lápis', 2.00, 0.02)
const p2 = new produto('MacBook', 7000, 0.2)
console.log(p1)
console.log(p2)

// Função factory

function criarUmFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        getSalario() {
            return (salario / 30) * (30 - faltas)
        } 
    }
}
const f1 = criarUmFuncionario('Pedro', 7980, 4)
console.log(f1.getSalario())
const f2 = criarUmFuncionario('Leonardo', 11400, 1)
console.log(f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON)