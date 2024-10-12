class pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar () {
        console.log(`Olá meu nome é ${this.nome}`)
    }
}

const meuNome = new pessoa('Junio')
meuNome.falar()

const criarPessoa = (nome) => {
    return {
        nome: nome,
        falar () {
            console.log(`Olá meu nome é ${nome}`)
        }
    }
}
const Eu = criarPessoa('Junio')
Eu.falar()
