// My local storage
var myLocalStorage = 'myCustomer'

// Customer
const customerName = document.getElementById('customer-name')
const cpf = document.getElementById('cpf')
const phoneNumber = document.getElementById('phone-number')

// Address
const addressType = document.getElementById('address-type')
const street = document.getElementById('street')
const number = document.getElementById('number')
const suburb = document.getElementById('suburb')
const city = document.getElementById('city')
const state = document.getElementById('state')
const zipCode = document.getElementById('zip')

// Enable submit button when inputs are filled
let myInputs = document.querySelectorAll("input[type='text']")

// My submit button
let myBtn = document.getElementById('btn-submit')

for (let i = 0; i < myInputs.length; i++) {
  myInputs[i].addEventListener('input', function () {
    let isBlank = 0
    for (let j = 0; j < myInputs.length; j++) {
      if (myInputs[j].value != '') {
        isBlank++
      }
    }
    if (isBlank == myInputs.length) {
      myBtn.disabled = false
    } else {
      myBtn.disabled = true
    }
  })
}

class Customer {
  constructor(
    customerName,
    cpf,
    phoneNumber,
    type,
    street,
    number,
    suburb,
    city,
    state,
    zip
  ) {
    this.customerName = customerName
    this.cpf = cpf
    this.phoneNumber = phoneNumber
    this.type = type
    this.street = street
    this.number = number
    this.suburb = suburb
    this.city = city
    this.state = state
    this.zip = zip
  }

  get customerData() {
    return [
      this.customerName,
      this.cpf,
      this.phoneNumber,
      this.type,
      this.street,
      this.number,
      this.suburb,
      this.city,
      this.state,
      this.zip
    ]
  }
}

// get the current local storage JSON
function getLocalStorage() {
  if (localStorage.getItem(myLocalStorage)) {
    return JSON.parse(localStorage.getItem(myLocalStorage))
  } else {
    localStorage.setItem(myLocalStorage, '[]')
    return JSON.parse(localStorage.getItem(myLocalStorage))
  }
}

// Save data on local Storage
function saveData() {
  let myObj = getLocalStorage()

  let customer = new Customer(
    customerName.value,
    cpf.value,
    phoneNumber.value,
    addressType.value,
    street.value,
    number.value,
    suburb.value,
    city.value,
    state.value,
    zip.value
  )

  myObj.push(customer)
  localStorage.setItem(myLocalStorage, JSON.stringify(myObj))
}