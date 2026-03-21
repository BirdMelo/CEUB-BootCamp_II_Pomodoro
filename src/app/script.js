import { start, studingTime, shortTime, longTime, formatTime } from "./timer.js"

const timerDisplay = document.getElementById('timer')
const start_pause_bt = document.getElementById('start-pause')

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

updateDisplay(time)