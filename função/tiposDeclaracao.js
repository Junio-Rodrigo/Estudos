console.log(soma(10, 4))
//console.log(sub(21, 7)) // is not defined

// function declaration 
function soma(x, y) {
    return x + y 
}

// function expression
const sub = function sub(x, y) {
    return x - y
}
console.log(sub(21, 7))

// named function expression 
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(2, 7))

