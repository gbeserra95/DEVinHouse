import { n1, n2, n3, btn, result } from './modules/selectors.js'
import average from './modules/average.js'

btn.addEventListener('click', () => {
  result.innerHTML = average(n1.value, n2.value, n3.value)
})
