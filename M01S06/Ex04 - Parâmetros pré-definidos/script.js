const person = (name = 'Jane', surname = 'Doe') => {
  return name + ' ' + surname
}

console.log(person('Gabriel', 'Beserra'))
console.log(person())
