const obj1 = {}

obj1.nome =  'bola'

console.log(obj1['nome'])


function obj(nome) {
    this.nome = nome 
}


const obj2 = new obj('junio')



console.log(obj2)




 //obj = new obj           transforma a função em um objeto

// console.log(obj)    

// obj('junio')
