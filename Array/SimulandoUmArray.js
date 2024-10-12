const QuaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(QuaseArray)

Object.defineProperty(QuaseArray, 'toString', {
    value: function () {
        return Object.values(this)
    } 
})

console.log(QuaseArray[0])

const meuArray = ['Rafeal', 'Ana', 'Bia']
console.log(QuaseArray.toString(), meuArray)