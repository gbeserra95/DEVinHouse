const button = document.getElementById('btn')
var isSatisfied = 0,
  ageSum = 0,
  participants = 0

button.addEventListener('click', function () {
  var name = prompt('Digite seu nome.')
  var rate = prompt('Digite um número de 1 a 10 para expressar sua satisfação.')

  ageSum += parseInt(prompt('Digite sua idade.'))

  if (confirm('Podemos incluir você na lista de satisfeitos?')) {
    isSatisfied++
  }

  participants++

  console.log('Idade: ' + ageSum)
  console.log('Média de idade: ' + ageSum / participants)
  console.log('Número de satisfeitos: ' + isSatisfied)

  document.getElementById('participants').innerHTML = participants
  document.getElementById('averageAge').innerHTML = Math.round(
    ageSum / participants
  )
  document.getElementById('isSatisfied').innerHTML = isSatisfied
})
