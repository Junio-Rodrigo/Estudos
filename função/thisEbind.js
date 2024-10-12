const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar2 = pessoa.falar
falar2() // Conflitos de paradigmas: funcional e OO (Orientada a objeto)

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()