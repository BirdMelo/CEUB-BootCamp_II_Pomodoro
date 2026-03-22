export const studingTime = 7200
export const shortTime = studingTime / 4
export const longTime = studingTime / 2

let timerInterval = null


export function start(currentTime, onTick, onComplete, startPauseBtn) {
    if (timerInterval) {
        clearTimer()
        toggleButton(startPauseBtn, './assets/icons/play_arrow.png')
        return
    }

    toggleButton(startPauseBtn, './assets/icons/pause.png')
    
    let tempTime = currentTime
    
    timerInterval = setInterval(() => {
        tempTime -= 1

        if (tempTime <= 0) {
            onTick(0)
            clearTimer()
            toggleButton(startPauseBtn, './assets/icons/play_arrow.png')
            onComplete()
            return
        }
        onTick(tempTime)
    }, 1000)
}

export function clearTimer() {
    clearInterval(timerInterval)
    timerInterval = null
}

function toggleButton(btn, img) {
    if (btn) btn.querySelector('img').setAttribute('src', img)
}

export function formatTime(seconds) {
    const date = new Date(seconds * 1000)
    return date.toISOString().slice(11, 19)
}