import { fiveMinutes, str5minutes } from './modules/minutes.js'
import { btn5, btnStart, btnStop, timerObj } from './modules/selectors.js'
import startTimer from './modules/startTimer.js'
import stopTimer from './modules/stopTimer.js'

export let duration = fiveMinutes

btn5.addEventListener('click', () => {
  timerObj.textContent = str5minutes
  duration = fiveMinutes

  btn10
})

btnStart.addEventListener('click', startTimer)
btnStop.addEventListener('click', stopTimer)
