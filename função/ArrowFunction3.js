let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global)
comparaComThis(this)

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)
console.log('Com Arrow function:')

// Com arrow function agora:

let comparaComThisArrow = (param) => {
    console.log(this === param)
} 
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)