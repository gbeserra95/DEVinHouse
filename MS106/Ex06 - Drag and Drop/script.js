import { dropZone, dragItems } from './modules/selectors.js'
import { drag, drop, allowDrop } from './modules/functions.js'

dropZone.addEventListener('drop', drop)
dropZone.addEventListener('dragover', allowDrop)

for (let item of dragItems) {
  item.addEventListener('drag', drag)
}
