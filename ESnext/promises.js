const falarDepoisDe = function (seconds, words) {
    new Promise((resolve, reject) => {
        setTimeout( () => {resolve(words)}, seconds * 1000)
    })
    .then(words => console.log((words.concat('!!!'))))
    .catch( e => console.log(e))
}

falarDepoisDe(5, 'oi')