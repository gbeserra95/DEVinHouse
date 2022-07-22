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
  constructor(fromAccount, toAccount, value) {
    this.fromAccount = fromAccount
    this.toAccount = toAccount
    this.value = value
    this.id = 1
    this.date = ''
  }

  transfer() {
    let today = new Date()
    this.fromAccount.balance -= this.value
    this.toAccount.balance += this.value
    return `Transaction number #${this.id}:
            From: ${this.fromAccount.customer.customerName}, account #${
      this.fromAccount.account
    }
            To: ${this.toAccount.customer.customerName}, account #${
      this.toAccount.account
    }
            Date: ${today.getDate()}/${today.getMonth()}/${today.getFullYear()} at ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}
            Value: $${this.value}`
    this.id++
  }
}

let vendor = new Customer(
  'Dominos Pizza',
  '111.111.111-14',
  new Address(
    'Comercial ',
    'Rua Antônio da Veiga',
    '479',
    'Blumenau',
    'SC',
    'Brasil',
    '89012-500'
  ),
  '(47)3237-7778'
)

let vendorAcc = new Account('256987-8', 500.0, vendor)

let customer = new Customer(
  'Joseph Tribianni',
  '123.333.456-14',
  new Address(
    'Residencial',
    'Rua dos Abutres',
    '78',
    'Blumenau',
    'SC',
    'Brasil',
    '89550-520'
  )
)

let customerAcc = new Account('123484-9', 500.0, customer)

let transfer01 = new Transaction(customerAcc, vendorAcc, 310.0)

console.log(`Customer Balance: ${customerAcc.balance}`)
console.log(`Vendor Balance: ${vendorAcc.balance}`)
console.log(`----------------------------------------`)

console.log(transfer01.transfer())

console.log(`----------------------------------------`)
console.log(`Customer Balance: ${customerAcc.balance}`)
console.log(`Vendor Balance: ${vendorAcc.balance}`)
