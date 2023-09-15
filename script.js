// Orologio
let hOrologio = document.querySelector('#oraOrologio')
let mOrologio = document.querySelector('#minutoOrologio')

let interval1 = setInterval(() => {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    hOrologio.innerHTML = `<p class="fs-1">${h}</p>`
    mOrologio.innerHTML = `<p class="fs-1">${m}</p>`
}, 100)


// Timer
let mTimer = document.querySelector('#mTimer')
let sTimer = document.querySelector('#sTimer')
let start = document.querySelector('#start')
let reset = document.querySelector('#reset')
let stop = document.querySelector('#stop')
let audio = document.querySelector('#audio')

start.addEventListener('click', () => {
    if (!(isNaN(mTimer.value)) && (mTimer.value <= 60) && !(isNaN(sTimer.value)) && (sTimer.value <= 60)) {
        let interval2 = setInterval(() => {
                if (sTimer.value > 0) {
                    sTimer.value --
                }else{
                    if (mTimer.value > 0) {
                        sTimer.value = 59
                        mTimer.value --
                        }
                    } 
                    stop.addEventListener('click', () => {
                        clearInterval(interval2)
                        audio.pause()
                    })
                    reset.addEventListener('click', () => {
                        mTimer.value = ''
                        sTimer.value = ''
                        clearInterval(interval2)
                    })
                    if(mTimer.value == 0 && sTimer.value == 0){
                        audio.play()
                    }
        }, 1000)
    }
})


// Sveglia
let hSveglia = document.querySelector('#hSveglia')
let mSveglia = document.querySelector('#mSveglia')
let imposta = document.querySelector('#imposta')
let elimina = document.querySelector('#elimina')

if (!(isNaN(hSveglia.value)) && (hSveglia.value <= 24) && !(isNaN(mSveglia.value)) && (mSveglia.value <= 60)){
    let interval3 = setInterval(() => {
            let date2 = new Date()
            let h2 = date2.getHours()
            let m2 = date2.getMinutes()
            if (hSveglia.value == h2 && mSveglia.value == m2) {
                audio.play()
            }
        elimina.addEventListener ('click', () => {
            hSveglia.value = ''
            mSveglia.value = ''
            audio.pause()
            clearInterval(interval3)
        })
    }, 1000)
}