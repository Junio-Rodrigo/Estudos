const areaTriangulo = function (b, a) {
    let area = b * a / 2
    area = Math.ceil(area)
    return area.toFixed(2)
}

console.log(areaTriangulo(10, 15))
console.log(areaTriangulo(7, 9))
console.log(areaTriangulo(9.25, 13.1))