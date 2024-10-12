const inverterObj = function (obj) {
    let newObj = {}
    for (let i = 0; i<Object.keys(obj).length; i++) {
        newObj[Object.values(obj)[i]] = Object.keys(obj)[i]
    }
    return newObj
}

console.log(inverterObj({ a: 1, b: 2 }))
console.log(inverterObj({
    nome: 'Junio',
    idade: 14,
    nota: 9
}))