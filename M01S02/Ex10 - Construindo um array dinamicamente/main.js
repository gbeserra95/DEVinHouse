window.onload = function () {
  var answer = ''
  var arr = []
  var colors = [
    'pink',
    'blue',
    'orange',
    'white',
    'green',
    'red',
    'violet',
    'grey',
    'brown',
    'yellow'
  ]

  while (answer != 'parar') {
    answer = prompt(`Digite uma palavra (escreva "parar" para sair).`)
    if (answer != 'parar') {
      arr.push(answer)
    }
  }

  // Sorting array
  arr.sort(function (a, b) {
    if (a.length > b.length) {
      return 1
    }
    if (a.length < b.length) {
      return -1
    }
    return 0
  })

  // Creating sections
  var container = document.getElementById('container')
  for (let i = 0; i < arr.length; i++) {
    var section = document.createElement('section')
    section.id = 'section' + i
    section.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)]

    var h1 = document.createElement('h1')
    h1.innerHTML = arr[i]

    container.appendChild(section)
    section.appendChild(h1)
  }
}
