import { response, dropZone, answers } from './selectors.js'
let dragged
let answered = false

export const allowDrop = e => {
  e.preventDefault()
}

export const drag = e => {
  e.dataTransfer.setData('text/plain', null)
  dragged = e.target
}

export const drop = e => {
  if (!answered) {
    e.preventDefault()
    dragged.parentNode.removeChild(dragged)
    e.target.appendChild(dragged)

    answers.style.visibility = 'hidden'

    if (dragged.innerHTML === '1958') {
      response.innerHTML = 'Você acertou!'
      response.style.color = 'green'
      dropZone.style.backgroundColor = 'white'
    } else {
      response.innerHTML = 'Você errou!'
      response.style.color = 'red'
      dropZone.style.backgroundColor = 'white'
      dragged.style.borderColor = 'red'
    }
    answered = true
  }
}
