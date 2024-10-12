function aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId
}

let aula1 = new aula('Bem vindo', 123)
let aula2 = new aula('Até breve', 456)
console.log(aula1, aula2)
console.log(aula1.__proto__ === aula.prototype)

// simulando o new
function novo(f, ...params){
    let obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

aula1 = novo(aula, 'Bem vindo', 123)
aula2 = novo(aula, 'Até breve', 456)
console.log(aula1, aula2)