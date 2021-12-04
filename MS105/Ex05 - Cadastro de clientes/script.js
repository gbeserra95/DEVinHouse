class Address {
  constructor(type, street, number, city, state, country, zip) {
    this.type = type
    this.street = street
    this.number = number
    this.city = city
    this.state = state
    this.country = country
    this.zip = zip
  }
}

class Customer {
  constructor(customerName, cpf, address, phone) {
    this.customerName = customerName
    this.cpf = cpf
    this.address = address
    this.phone = phone
  }
}

let newAddress = new Address(
  'Comercial ',
  'Rua Antônio da Veiga',
  '479',
  'Blumenau',
  'SC',
  'Brasil',
  '89012-500'
)

let newCustomer = new Customer(
  'Dominos Pizza',
  '11111111111',
  newAddress,
  '4732377778'
)

console.log(newCustomer)
