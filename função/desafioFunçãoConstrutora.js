function pessoa1(nome) {
    this.nome = nome
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const meuNome = new pessoa1('Junio')
meuNome.falar()