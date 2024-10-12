function getInteiroAleatorioEntre(min, max) {
   let valor = Math.random() * (max - min) + min
   return Math.floor(valor)
}
var opcao

while ( opcao != -1) {
opcao = getInteiroAleatorioEntre(-1, 10)
if (opcao != -1){
    console.log('Caiu no número ' + opcao)
}
}
    
console.log('Odeio o número -1, TCHAU!!!')