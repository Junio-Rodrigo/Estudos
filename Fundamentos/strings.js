const escola = "cod3r"

console.log(escola.charAt(2))//quando chega no número selecionado da esquerda para direita, ele colhe aquele dado.
console.log(escola.charAt(5))//não tem índice 5 só vai até o 4 por isso não colheu nenhum dado.
console.log(escola.charCodeAt("2"))//colhe o indice que esta na posição que você colocou e o console traduz para a tabela unicode.
console.log(escola.indexOf("r"))//monstra a posição do índice colocado.

console.log (escola.substring(3))//a partir da posição que foi colocada ele vai colher os índices como os dados
console.log (escola.substring(1,3))//agora tem dois número os dois são posições o primeiro é onde começa e o segundo é quantos que você deseja colher a partir do primeiro
console.log('escola '.concat(escola).concat("!"))//concat = +
console.log(escola.replace(" ", ''))
console.log("ana,joão,leticia,miguel".split(","))