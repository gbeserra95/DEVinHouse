import {
  num1,
  num2,
  btnPlus,
  btnMinus,
  btnTimes,
  btnDivide,
  result
} from './modules/selectors.js'
import sum from './modules/sum.js'
import subtract from './modules/subtract.js'
import multiply from './modules/multiply.js'
import divide from './modules/divide.js'

btnPlus.addEventListener('click', () => {
  result.innerHTML = sum(parseFloat(num1.value), parseFloat(num2.value))
})

btnMinus.addEventListener('click', () => {
  result.innerHTML = subtract(parseFloat(num1.value), parseFloat(num2.value))
})

btnTimes.addEventListener('click', () => {
  result.innerHTML = multiply(parseFloat(num1.value), parseFloat(num2.value))
})

btnDivide.addEventListener('click', () => {
  result.innerHTML = divide(parseFloat(num1.value), parseFloat(num2.value))
})
