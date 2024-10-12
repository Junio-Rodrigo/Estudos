/*console.log(typeof Object)
console.log(typeof Object())

const a = {nome: 'geladeira eletrolux', preco: 'R$4990'}
console.log(typeof a)

// vamos analisar um vídeo:

const Video = function (Ano, Views, Likes) {
    this.Ano = Ano
    this.Views = Views
    this.Likes = Likes
    Assistir = function () {
        console.log('Assistindo...')
    }
} 
VideoNovo = new Video(10, 100, 10000)
console.log(VideoNovo)
Assistir()*/





function Cachorro(a, b, c) {
    this.NomeOsvaldo=a
    this.FomeOsvaldo=b
    this.SonoOsvaldo=c
}
function apresentar() {
    console.log(`Olá eu sou ${NomeOsvaldo}, eu estou com ${FomeOsvaldo} pontos de fome e eu estou ${SonoOsvaldo}`)
}
Cachorro('jeremias', 3, false)
apresentar()