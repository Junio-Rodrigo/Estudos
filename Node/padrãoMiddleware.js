// Uma sequência de funções, um efeito dominó EXs:

function middlewareA() {
    middlewareB() // next()
}
function middlewareB() {
    middlewareC() // next()
}
function middlewareC(){
    console.log('Enviando uma resposta...')
}
middlewareA()

// middleware pattern (chain of responsibility)
const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valo2 = 'mid2'
    next()
}

const passo3 = contexto => {
    contexto.valo3 = 'mid3' 
}

const exec = (context, ...middlewares) => {
    const execMiddleware = (indice = 0) => {
        if (middlewares.length > 0 && indice < middlewares.length){
            middlewares[indice](context, () => execMiddleware(indice + 1))
        }
    }
    execMiddleware(0)
}

const context = {}

exec(context, passo1, passo2, passo3)
console.log(context)