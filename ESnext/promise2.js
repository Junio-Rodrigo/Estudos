// setTimeout( () => {
//     console.log('Executando callback...')
//     setTimeout( () => {
//         console.log('Executando callback...')
//         setTimeout( () => {
//             console.log('Executando callback...')
//         }, 1000)
//     }, 1000)
// }, 1000)

const esperarPor = function (tempo = 2000, string = 'Executando Promise...') {
    return new Promise( resolve => {
        console.log(string)
        setTimeout( () => {resolve()}, tempo)
    })
}

esperarPor()
    .then( () => esperarPor())
    .then(esperarPor())