const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() // Conflitos de paradigmas: funcional e OO (Orientada a objeto)

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const fala2 = pessoa.falar.bind(pessoa)
fala2()