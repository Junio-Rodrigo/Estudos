document.addEventListener('DOMContentLoaded', () => {
    const init = document.querySelector('.init')
    const stop = document.querySelector('.stop')
    const timer = document.querySelector('.timer')

    let interval = undefined
    let timerS = 0
    let timerM = 25
    let start = false
    let pause = true
    timer.innerHTML = `${timerM}:${timerS < 10 ? '0' + timerS : timerS}`
    init.onclick = e => {
        if (start) {
            return
        }
        start = true
        interval = setInterval(() => {
            if (start) {
                if (timerS == 0) {
                    timerS = 59
                    timerM -= 1
                }
                else {
                    timerS -= 1
                    if (timerM == 0 && timerS == 0 && pause) {
                        pause = false
                        timer.style.color = '#f00'
                        if (interval) clearInterval(interval)
                            start = false
                        timerS = 0
                        timerM = 5
                    }
                    if (timerS == 0 && timerM == 0 && !pause) {
                        timer.style.color = '#000'
                        pause = true
                        if (interval) clearInterval(interval)
                        start = false                        
                        timerS = 0
                        timerM = 25
                    }
            }
                timer.innerHTML = `${timerM}:${timerS < 10 ? '0' + timerS : timerS}`
            }
        }, 1000)
    }
    
    stop.onclick = e => {
        if (interval) clearInterval(interval)
            
            start = false
            timerM = 25
            timerS = 0
            timer.innerHTML = `${timerM}:${timerS < 10 ? '0' + timerS : timerS}`
        timer.style.color = '#000'
    }
})