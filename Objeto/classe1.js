    class lancamento {
        constructor(nome = 'Genérico', valor = 0) {
            this.valor = valor
            this.nome = nome
        }
    }
    class CicloFinanceiro{
        constructor(mes, ano) {
            this.ano = ano
            this.mes = mes
            this.lancamentos = []
        }
        addLancamentos(...lancamentos) {
            lancamentos.forEach(l => this.lancamentos.push(l))
       }
       sumario() {
        let valorInicial = 0
        this.lancamentos.forEach(l => valorInicial += l.valor)
        return valorInicial
       }
    }

const salario = new lancamento('Salário', 1500)
const divida = new lancamento('Pagar casa', -200)

const contas = new CicloFinanceiro(6, 2020) 
contas.addLancamentos(divida, salario)

console.log(contas.sumario())
console.log(contas.__proto__ === CicloFinanceiro.prototype)
console.log(CicloFinanceiro.__proto__ === Function.prototype)