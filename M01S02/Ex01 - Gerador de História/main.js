window.onload = function () {
  var nome = prompt('Qual é o seu nome?')
  var idade = prompt('Qual é a sua idade?')
  var esporte = prompt('Qual é o seu esporte favorito?')
  var diaFavorito = prompt('Qual é a seu dia da semana favorito?')
  var pessoaImportante = prompt('Cite o nome de alguém importante para você.')
  var pessoaAdmiravel = window.prompt('Cite o nome de alguém que você admira.')

  var historia = `Hoje, <span>${diaFavorito}</span>, é um dia histórico. Todos os fãs de <span>${esporte}</span> estão maravilhados com a proeza realizada pelo(a) atleta <span>${nome}</span>. <span>${pessoaImportante}</span> não conteve as lágrimas ao comentar sobre em uma entrevista e até o(a) <span>${pessoaAdmiravel}</span> twittou “é muito bom ver alguém com <span>${idade}</span> demonstrando tanta habilidade.`

  document.getElementById('historia').innerHTML = historia
}
