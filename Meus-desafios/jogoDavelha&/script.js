document.addEventListener('DOMContentLoaded', () => {
    const jogar = document.querySelector('.play')
    let quadrados = document.querySelectorAll('.hashtag > div')
    const jogo = document.querySelector('.game')
    const pontos = document.querySelector('.points')
    
    let p = false
    let o = true
    let i = 1
    let formas = ['O', 'X']
    let pontosB = 0
    let pontosX = 0

    jogar.onclick = e => {
        setTimeout(() => {
            jogar.style.display = 'none'
            jogo.style.display = 'grid'
        }, 200)
    }
    
    quadrados = Array.from(quadrados)
    quadrados.forEach( quadrado => {
        quadrado.onclick = e => {
            if (p) return
            if (quadrado.innerHTML.length == 1) return
            if (o) {
                i = 1
                o = false
            }

            quadrado.innerHTML = formas[i]
            i == 0 ? i++ : i--

            if (quadrado.innerHTML == 'X') quadrado.style.color = 'blue'
            else quadrado.style.color = 'red'
            
            //Column
            for (let i=0; i<3;i++)  {
                if (quadrados[i].innerHTML && quadrados[i+3].innerHTML && quadrados[i+6].innerHTML) {
                    if (quadrados[i].innerHTML == quadrados[i+3].innerHTML && quadrados[i+6].innerHTML == quadrados[i+3].innerHTML) {

                        if (quadrado.innerHTML == 'X') {
                            pontosX++
                        }
                        else {
                            pontosB++
                        }
                        quadrados[i].style.backgroundColor = '#0f0'
                        quadrados[i+3].style.backgroundColor = '#0f0'
                        quadrados[i+6].style.backgroundColor = '#0f0'
                            p = true
                            setTimeout( () => {
                                quadrados.forEach( e => {
                                    e.innerHTML = ''
                                })
                                quadrados[i].style.backgroundColor = '#fff'
                                quadrados[i+3].style.backgroundColor = '#fff'
                                quadrados[i+6].style.backgroundColor = '#fff'
                                p = false
                            }, 2000)
                            o = true
                    }
                }
            }

            // Row
            for (let i=0; i<9;i+=3)  {
                if (quadrados[i].innerHTML && quadrados[i+1].innerHTML && quadrados[i+2].innerHTML) {
                    if (quadrados[i].innerHTML == quadrados[i+1].innerHTML && quadrados[i+2].innerHTML == quadrados[i+1].innerHTML) {

                        if (quadrado.innerHTML == 'X') {
                            pontosX++
                        }
                        else {
                            pontosB++
                        }
                        quadrados[i].style.backgroundColor = '#0f0'
                        quadrados[i+1].style.backgroundColor = '#0f0'
                        quadrados[i+2].style.backgroundColor = '#0f0'
                            p = true
                            setTimeout( () => {
                                quadrados.forEach( e => {
                                    e.innerHTML = ''
                                })
                                quadrados[i].style.backgroundColor = '#fff'
                                quadrados[i+1].style.backgroundColor = '#fff'
                                quadrados[i+2].style.backgroundColor = '#fff'
                                p = false
                            }, 2000)
                            o = true
                    }
                }
            }

            // diagonally
            if (quadrados[0].innerHTML && quadrados[4].innerHTML && quadrados[8].innerHTML) {
                if (quadrados[0].innerHTML == quadrados[4].innerHTML && quadrados[8].innerHTML == quadrados[4].innerHTML) {

                    if (quadrado.innerHTML == 'X') {
                        pontosX++
                    }
                    else {
                        pontosB++
                    }
                    quadrados[0].style.backgroundColor = '#0f0'
                    quadrados[4].style.backgroundColor = '#0f0'
                    quadrados[8].style.backgroundColor = '#0f0'

                    p = true
                    setTimeout(() => {
                        quadrados.forEach( e => {
                            e.innerHTML = ''
                        })
                        quadrados[0].style.backgroundColor = '#fff'
                        quadrados[4].style.backgroundColor = '#fff'
                        quadrados[8].style.backgroundColor = '#fff'
                    p = false
                    },2000)
                    o = true
                }
            }
            if (quadrados[2].innerHTML && quadrados[4].innerHTML && quadrados[6].innerHTML) {
                if (quadrados[2].innerHTML == quadrados[4].innerHTML && quadrados[6].innerHTML == quadrados[4].innerHTML) {

                    if (quadrado.innerHTML == 'X') {
                        pontosX++
                    }
                    else {
                        pontosB++
                    }
                    quadrados[2].style.backgroundColor = '#0f0'
                    quadrados[4].style.backgroundColor = '#0f0'
                    quadrados[6].style.backgroundColor = '#0f0'
                    p = true
                    setTimeout(() => {
                        quadrados.forEach( e => {
                            e.innerHTML = ''
                        })
                        quadrados[2].style.backgroundColor = '#fff'
                        quadrados[4].style.backgroundColor = '#fff'
                        quadrados[6].style.backgroundColor = '#fff'
                    p = false
                    },2000)
                    o = true
                }
            }

            pontos.innerHTML = `${pontosX} / ${pontosB}`

        let setados = quadrados.filter( e => {
            return e.innerHTML.length == 1
        })
        if (setados.length == 9) {
            quadrados.forEach( e => {
                setTimeout( () => {e.innerHTML = ''}, 1000)
            })
            o = true
        } 
    }})
})