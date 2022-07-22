import { interval } from './startTimer.js'

const stopTimer = () => {
  clearInterval(interval)
}

export default stopTimer
