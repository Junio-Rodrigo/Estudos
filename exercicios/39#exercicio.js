const vetores = function (v1, v2) {
    [v1, v2] = [v2, v1] 
    console.log(v1, v2)
}
vetores([1, 2, 3, 4], [5, 6, 7, 8])