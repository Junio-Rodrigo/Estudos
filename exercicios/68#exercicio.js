const segundoMaior = function (nums) {
    let segundoNum = -Infinity
    let maior = -Infinity
    nums.forEach(e => {
        if (e > maior) {
           maior = e}})
    nums.forEach(e => {
        if (e < maior && e > segundoNum) {
           segundoNum = e}})
return segundoNum}
console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))