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

  validateCPF() {
    let re = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    if (re.test(this.cpf)) {
      return 'CPF válido'
    } else {
      return 'CPF inválido'
    }
  }
}

class Account {
  constructor(account, balance, customer) {
    this.account = account
    this.balance = balance
    this.customer = customer
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
  '111.111.111-14',
  newAddress,
  '4732377778'
)

let newAccount = new Account('256987-8', 'R$2000000,00', newCustomer)

console.log(newAccount)
console.log(newCustomer.validateCPF())
