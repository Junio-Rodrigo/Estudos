// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um Array
const array = [function (a, b) { return (a + b) }, fun2, fun1]
console.log(array[0](3, 6))

// Armazenar em um atributo de objeto 
const obj = {}
obj.falar = function () {return 'Opa!'}
console.log(obj.falar())

// Passar uma função como um parâmetro
function run(fun) {
    fun()
}
run(function () {console.log('Executando...')})

// Um função pode retornar/conter um função
function multiplicar(a, b) {
    return function (c) {
        console.log(a * b * c)
    }
}
multiplicar(2, 2)(10)