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

class Transaction {
  constructor(account, value) {
    this.account = account
    this.value = value
  }

  transfer() {
    this.account.balance -= this.value
  }

  deposit() {
    this.account.balance += this.value
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

let newAccount = new Account('256987-8', 500.0, newCustomer)

let newTransaction = new Transaction(newAccount, 200.5)
newTransaction.deposit()

console.log(newAccount.balance)
console.log(newCustomer.validateCPF())

let otherTransaction = new Transaction(newAccount, 100.49)
otherTransaction.transfer()
console.log(newAccount.balance)
