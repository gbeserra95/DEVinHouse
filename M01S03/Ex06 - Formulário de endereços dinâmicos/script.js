const btn = document.getElementById('btn')
const form = document.getElementById('form')

btn.addEventListener('click', () => {
  addAddressField()
})

const addAddressField = () => {
  let addresses = document.querySelectorAll('.address-input')
  let i = addresses.length + 1
  let newDiv = document.createElement('div')
  let newLabel = document.createElement('label')
  let newInput = document.createElement('input')

  newDiv.classList.add('separator')
  newLabel.setAttribute('for', `faddress${i}`)
  newLabel.innerHTML = `Endereço #${i}`
  newInput.setAttribute('type', 'text')
  newInput.setAttribute('name', `faddress${i}`)
  newInput.setAttribute('id', `faddress${i}`)
  newInput.classList.add('address-input')

  form.appendChild(newDiv)
  newDiv.appendChild(newLabel)
  newDiv.appendChild(newInput)
}
