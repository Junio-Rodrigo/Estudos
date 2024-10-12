const produto =  new Object
produto.nome = 'Remédio'
produto['Marca do produto'] = 'Genérica'
produto.preco = 14

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'Ferrari',
    preco: 1000000,
    proprietario: {
        nome: 'Junio',
        idade: 30,
        endereço: {
            logradouro:'Rua tal',
            numero: 520
        }
    },
    condutores:[{
        nome: 'Rodrigo',
        idade: 56
    }, {
        nome: 'Leonardo',
        idade: 40
    }],
    valorDoSeguro: function () {
        // ...
    }
}