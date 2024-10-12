// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido

const anuidade = (mesPago, anuidade) => {
    let totalPagar = (anuidade * (1.05**mesPago)).toFixed(2)
    return `O total a ser pago é de R$${totalPagar}`
}
console.log(anuidade(5, 3600))