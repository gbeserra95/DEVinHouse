import { fiveMinutes } from './minutes.js'
import { timerObj } from './selectors.js'
import { duration } from '../main.js'

export let interval

const startTimer = () => {
  let timer = duration
  let minutes = 0
  let seconds = 0
  interval = setInterval(() => {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    timerObj.textContent = minutes + ':' + seconds

    if (--timer < 0) {
      timer = fiveMinutes
    }
  }, 1000)
}

export default startTimer
