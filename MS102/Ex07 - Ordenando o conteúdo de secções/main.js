var textos = ['animal', 'carro', 'humano', 'prédio', 'cadeira', 'objeto']
var colors = ['pink', 'blue', 'orange', 'white', 'green', 'red']

var container = document.getElementById('container')
var section, h1

window.onload = function () {
  textos.sort()
  for (var i = 0; i < textos.length; i++) {
    section = document.createElement('section')
    section.id = 'section' + i
    section.style.backgroundColor = colors[i]

    container.appendChild(section)

    h1 = document.createElement('h1')
    h1.innerHTML = textos[i]

    section.appendChild(h1)
  }
}
