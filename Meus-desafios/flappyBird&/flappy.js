document.addEventListener('DOMContentLoaded', () => {
    const flappyGame = document.querySelector('[wm-flappy]')
    const bird = document.querySelector('.bird')
    let tubes = document.querySelectorAll('.tubes')
    const score = document.querySelector('.points')
    score.innerHTML = 0
    tubes = Array.from(tubes)
    let gameOver = false
    
    let interval;
    function gerarNumeroAlea(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Fazendo o passaro voar ->
    function flying(bolean) {
            if (bolean) {
                clearInterval(interval)
                interval = setInterval( () => {
                    if (gameOver) return 
                    let currentTop = parseFloat(window.getComputedStyle(bird).top)
                        let newCurrentTop = currentTop - 4
                        newCurrentTop < 0 ? newCurrentTop = 0 : newCurrentTop
                        bird.style.top = `${newCurrentTop}px`
                    }, 10)
                } else {
                    clearInterval(interval)
                    interval = setInterval( () => {
                        if (gameOver) return
                    let currentTop = parseFloat(window.getComputedStyle(bird).top)
                        let newCurrentTop = currentTop + 2
                        newCurrentTop > 520 ? newCurrentTop = 520 : newCurrentTop
                        bird.style.top = `${newCurrentTop}px`
                }, 8)
            }
        }
        
        function sobrePostos(elementA, elementB) {
            const a = elementA.getBoundingClientRect()
            const b = elementB.getBoundingClientRect()
            const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
            const vertical = a.height + a.top >= b.top && b.height + b.top >= a.top

            return horizontal && vertical
        }
        
        function colision(bird, tubes) {
            let colision = false
            tubes.forEach( parTubes => {
                if (!colision) {
                    const superior = parTubes.children[0]
                    const inferior = parTubes.children[1]
                    colision = sobrePostos(bird, superior) || sobrePostos(bird, inferior)
                }
            })
            return colision
        }

        addEventListener('keydown', (event) => {
            if (event.key == 'w' || event.key == ' ') {
                flying(true)
            }
        })
        addEventListener('keyup', () => {
            flying(false)
        })


    // Fazendo os tubes se mexerem. . .
    // Fazer um sistema carrocel com os tubos

    let clearInter;
    tubes[0].style.left = 1000 + 'px'
    tubes[1].style.left = 1300 + 'px'
    tubes[2].style.left = 1600 + 'px'
      
            clearInterval(clearInter)
            clearInter = setInterval( () => {
                if (gameOver) {
                    return
                }

                let currentleft1 = parseFloat(window.getComputedStyle(tubes[0]).left)
                let currentleft2= parseFloat(window.getComputedStyle(tubes[1]).left)
                let currentleft3 = parseFloat(window.getComputedStyle(tubes[2]).left)
    
                let newCurrent1 = currentleft1 - 1
                let newCurrent2 = currentleft2 - 1
                let newCurrent3 = currentleft3 - 1
                if (newCurrent1 < -250) {

                    let alturaALea1 = gerarNumeroAlea(0, 420)
                    
                    let sobras1 = 420 - alturaALea1
                    tubes[0].children[1].style.height = alturaALea1 + 'px'
                    tubes[0].children[0].style.height = sobras1 + 'px'
                    tubes[0].style.left = 1000 + 'px'
                    
                } else tubes[0].style.left = `${newCurrent1}px`

                if (newCurrent2 < -250) {
                    
                    let alturaALea2 = gerarNumeroAlea(0, 420)
                    let sobras2 = 420 - alturaALea2
                    tubes[1].children[1].style.height = alturaALea2 + 'px'
                    tubes[1].children[0].style.height = sobras2 + 'px'
                    tubes[1].style.left = 1000 + 'px'
                    
                } else tubes[1].style.left = `${newCurrent2}px`


                if (newCurrent3 < -250) {
                    
                    let alturaALea3 = gerarNumeroAlea(0, 420)
                    let sobras3 = 420 - alturaALea3
                    tubes[2].children[1].style.height = alturaALea3 + 'px'
                    tubes[2].children[0].style.height = sobras3 + 'px'
                    tubes[2].style.left = 1000 + 'px'

                } else tubes[2].style.left = `${newCurrent3}px`

                // Sistema de colisão. . .


                if (colision(bird, tubes)) {
                    gameOver = true
                }
                
                // Sistema de pontuações. . .
                const birdPositionLeft = parseFloat(window.getComputedStyle(bird).left)
                for (let tube of tubes) {
                    let tubePosition = parseFloat(window.getComputedStyle(tube).left)
                    if (birdPositionLeft == tubePosition) {
                        score.innerHTML++
                    }
                }
            }, 5)
})