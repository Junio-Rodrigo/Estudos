const media = function (nums) {
    let soma = nums.reduce((a, n) => {
        return a + n
    })
    return soma / nums.length 
}

console.log(media([0, 10]))
console.log(media([1, 2, 3, 4, 5]))