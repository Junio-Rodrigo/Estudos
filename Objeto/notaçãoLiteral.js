const a = 1, b = 2, c = 3

obj1 = {a: a, b: b, c: c}
obj2 = {a, b, c}

console.log(obj1, obj2)

const obj3 = {}
const nomeAtr = 'nota'
const valorAtr = 7.87

obj3[nomeAtr] = valorAtr
console.log(obj3)

const obj4 = {[nomeAtr]: valorAtr}
console.log(obj4)

const obj5 = {
    funcao1: function () {
        //...
    },
    funcao2 () {
        //...
    }
}
console.log(obj5)