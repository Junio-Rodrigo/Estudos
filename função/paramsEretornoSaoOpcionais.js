function area(largura, altura) {
    const area = largura*altura
    if (area > 20) console.log(`Essa área não é permitida: ${area}m² `)
    else return area
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,5,6,7,8,))
console.log(area(5,5))
