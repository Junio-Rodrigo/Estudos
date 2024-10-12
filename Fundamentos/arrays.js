let valores =[7.7, 6.9, 12.6, 65.895]
console.log(valores[0], valores[3])
console.log(valores[4])
valores[4]=10
console.log(valores[4])
console.log(valores)
console.log(typeof valores)
console.log(valores.length )

valores.push({id: 3}, false, null, 'texto' )
console.log(valores)
valores.pop()
delete valores[0]
console.log (valores)

let object = (2, true, null, "eu sou foda")
console.log(typeof object)
console.log(object)

let array = [2, "eu sou foda", true, null]
console.log(array[0])
