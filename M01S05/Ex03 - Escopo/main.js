window.onload = function () {
  let nome = prompt('Qual é o seu nome?')
  let idade = prompt('Qual é a sua idade?')
  let esporte = prompt('Qual é o seu esporte favorito?')
  let diaFavorito = prompt('Qual é a seu dia da semana favorito?')
  let pessoaImportante = prompt('Cite o nome de alguém importante para você.')
  let pessoaAdmiravel = window.prompt('Cite o nome de alguém que você admira.')

  let historia = `Hoje, <span>${diaFavorito}</span>, é um dia histórico. Todos os fãs de <span>${esporte}</span> estão maravilhados com a proeza realizada pelo(a) atleta <span>${nome}</span>. <span>${pessoaImportante}</span> não conteve as lágrimas ao comentar sobre em uma entrevista e até o(a) <span>${pessoaAdmiravel}</span> twittou “é muito bom ver alguém com <span>${idade}</span> demonstrando tanta habilidade.`

  document.getElementById('historia').innerHTML = historia
}
