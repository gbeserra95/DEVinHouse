const storageName = 'data'
const tableHeader = ['Nome', 'Sobrenome', 'E-mail', 'Telefone', 'Endereço']

// Container
const container = document.getElementById('container')

// Button
const btn = document.getElementById('btn')

// Inputs
const fname = document.getElementById('fname')
const fsurname = document.getElementById('fsurname')
const femail = document.getElementById('femail')
const fphone = document.getElementById('fphone')
const faddress = document.getElementById('faddress')

const allInputs = document.querySelectorAll("input[type='text']")

// Save data to local storage
function saveData() {
  let obj = JSON.parse(localStorage.getItem(storageName))
  let data = {
    name: fname.value,
    surname: fsurname.value,
    email: femail.value,
    phone: fphone.value,
    address: faddress.value
  }
  obj.push(data)
  localStorage.setItem(storageName, JSON.stringify(obj))
  for (let element of allInputs) {
    element.value = ''
  }
  loadData()
}

// Load data
function loadData() {
  let obj = JSON.parse(localStorage.getItem(storageName))
  let child = document.getElementById('my-table')

  if (child != null) {
    container.removeChild(child)
  }

  let table = document.createElement('table')
  table.id = 'my-table'

  let headerRow = document.createElement('tr')

  container.appendChild(table)
  table.appendChild(headerRow)

  for (let i of tableHeader) {
    let headerColumn = document.createElement('th')
    headerRow.appendChild(headerColumn)
    headerColumn.innerHTML = i
  }

  for (let i of obj) {
    let row = document.createElement('tr')
    table.appendChild(row)
    for (let j in i) {
      let column = document.createElement('td')
      row.appendChild(column)
      column.innerHTML = i[j]
    }
  }
}

if (localStorage.getItem(storageName) === null) {
  localStorage.setItem(storageName, '[]')
} else {
  loadData()
}

btn.disabled = true

for (let i = 0; i < allInputs.length; i++) {
  allInputs[i].addEventListener('input', () => {
    let isBlank = 0
    for (let j = 0; j < allInputs.length; j++) {
      if (allInputs[j].value != '') {
        isBlank++
      }
    }
    if (isBlank == allInputs.length) {
      btn.disabled = false
    } else {
      btn.disabled = true
    }
  })
}

btn.addEventListener('click', () => {
  saveData()
})
