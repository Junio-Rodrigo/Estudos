// O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço
// 100 Cachorro Quente R$ 3,00
// 200 Hambúrguer Simples R$ 4,00
// 300 Cheeseburguer R$ 5,50
// 400 Bauru R$ 7,50
// 500 Refrigerante R$ 3,50
// 600 Suco R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente

const lanchonete = (cod, quant = 1) => {
    switch (cod){
        case 100:
            return `R$${3 * quant} ${quant}, Cachorro quente`
        case 200:
            return `R$${4 * quant} ${quant}, Hambúrguer Simples`
        case 300:
            return `R$${5.50 * quant}, ${quant} Cheeseburguer`
        case 400:
            return `R$${7.50 * quant}, ${quant} Bauru`
        case 500:
            return `R$${3.50 * quant}, ${quant} Refrigerante`
        case 600:
            return `R$${2.80 * quant}, ${quant} Suco`
        default:
            return 'Produto não existente'
    }
}

console.log(lanchonete(400, 4))