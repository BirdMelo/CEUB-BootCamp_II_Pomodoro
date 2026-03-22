import { start, studingTime, shortTime, longTime, formatTime, clearTimer } from "./timer.js"

const timerDisplay = document.getElementById('timer')
const start_pause_bt = document.getElementById('start-pause')
const studingBtn = document.getElementById('studing')
const shortBtn = document.getElementById('short')
const longBtn = document.getElementById('long')
const html = document.querySelector('html')

export let time = studingTime

function resetTimer() {
    clearTimer()
    const icon = start_pause_bt.querySelector('img')
    if (icon) icon.setAttribute('src', './assets/icons/play_arrow.png')
}

function updateDisplay(value) {
    time = value
    timerDisplay.innerHTML = formatTime(time)
}

function handleComplete() {
    const context = document.documentElement.getAttribute('data-context')
    if (context === 'studing') updateDisplay(shortTime)
    else if (context === 'short') updateDisplay(longTime)
    else updateDisplay(studingTime)
    alert("Tempo finalizado!")
}

start_pause_bt.addEventListener('click', () => {
    start(time, (newTime) => updateDisplay(newTime), handleComplete, start_pause_bt)
})

studingBtn.addEventListener('click', () => {
    resetTimer()
    updateDisplay(studingTime)
    html.setAttribute('data-context', 'studing')
})

shortBtn.addEventListener('click', () => {
    resetTimer()
    updateDisplay(shortTime)
    html.setAttribute('data-context', 'short')
})

longBtn.addEventListener('click', () => {
    resetTimer()
    updateDisplay(longTime)
    html.setAttribute('data-context', 'long')
})


updateDisplay(time)