import { start, studingTime, shortTime, longTime, formatTime } from "./timer.js"

const timerDisplay = document.getElementById('timer')
const start_pause_bt = document.getElementById('start-pause')
const studingBtn = document.getElementById('studing')
const shortBtn = document.getElementById('short')
const longBtn = document.getElementById('long')
const html = document.querySelector('html')

export let time = studingTime

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
    updateDisplay(studingTime)
    html.setAttribute('data-context', 'studing')
})

shortBtn.addEventListener('click', () => {
    updateDisplay(shortTime)
    html.setAttribute('data-context', 'short')
})

longBtn.addEventListener('click', () => {
    updateDisplay(longTime)
    html.setAttribute('data-context', 'long')
})


updateDisplay(time)