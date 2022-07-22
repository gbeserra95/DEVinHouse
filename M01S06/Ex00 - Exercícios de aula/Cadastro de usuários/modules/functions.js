import * as selectors from './selectors.js'

const setValue = e => {
  e.preventDefault()
  selectors.image.src = selectors.imageInput.value
  selectors.name.innerHTML = selectors.nameInput.value
  selectors.description.innerHTML = selectors.descriptionInput.value
}

export default setValue
