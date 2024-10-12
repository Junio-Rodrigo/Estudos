/*
O que é ESnext? - São as novidades do JavaScript de 2017

Map - Cria um objeto que se pode criar chaves com maior variabilidade como funções na sua forma literal,
objetos na sua forma literal, arrays e etc...
Sintaxe: new Map()

Set - Cria um objeto que não se pode passar o mesmo valor ou seja não há uma repetição nele.
Sintaxe: new Set()

Tagged Template - `Se escreve como um ${template} comum` porem quando passa o template como valor de dois
parametros o primeiro recebe o valor das string do template e o segundo parametro recebe os valores que estão
em dólar e chave ( ${} ).
Sintaxe: function blabla(str, valores) {}
blabla( `blablabla ${papa}` )

Spread/Rest - Com esta sintaxe ( ...variavel ) ele serve para duas coisas espalhar e juntar, ele meio que 
concatena na sua forma spread em array, objetos e templates, mas na sua forma rest ele junta todos os valores 
dentro de um array.
Sintaxe: ...valor

for of - É a maneira de percorrer um valor pelos elementos e não pelos indices como era antes com o (for in).
for ( let i of variavel ) {}

Promises - new Promise( callback ) -> A instância gerada é uma Promise pendente -> (Promise pending) até chegar no resolve ou reject, o resolve só é ativo quando a callback ocorreu como
o esperado, então é retornada para a função then(callback) -> (Promise fulfilled), já o reject é só ativo quando a callback não ocorreu como
o esperado e então é retornado para a função catch(callback) -> (Promise rejected).
Sintaxe: new Promise( (resolve, reject) => { 
    resolve() 
    reject()
    })
    .then( () => {})
    .catch( () => {})

Funções Async - Este tipo de função como nome já diz cria uma função que funciona de forma assíncrona ou seja acaba pulando algumas etapas
importantes como uma função que retorna uma Promise, para que isso não aconteça colocamos o await antes de chamar a função para que a promise seja processada de forma sícrona. 
A função async sempre retorna uma promise, conseguimos pegar o valor desta promise utilisando a função then(), mas para o tratamento de erro devemos utilizar as funções
try e catch.
*/