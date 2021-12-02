const frameworks = ['vuejs', 'angularjs', 'reactjs']
const [, , react] = frameworks

console.log(react)

const personagem = {
  nome: 'Samwise Gamgee',
  nascimento: '2983 da Terceira Era do Sol',
  familia: {
    esposa: 'Rosinha Villa',
    melhorAmigo: 'Frodo Baggins'
  }
}

const historiaDoPersonagem = ({ nome, familia: { esposa, melhorAmigo } }) => {
  return `Meu nome é ${nome} e sou casado com ${esposa}. Gosto de ir em aventuras com meu melhor amigo ${melhorAmigo}.`
}

console.log(historiaDoPersonagem(personagem))

const frutas = ['morango', 'pessego', 'banana']
const legumes = ['cenoura', 'batata', 'abobrinha']

const alimentos = [...frutas, ...legumes]

console.log(alimentos)

const usuario = {
  nome: 'Joana',
  sobrenome: 'Carvalho',
  interesses: ['leitura', 'jardinagem', 'internet das coisas'],
  familia: {
    pai: 'Claudio',
    mae: 'Odete',
    irma: 'Lorena'
  }
}

const historia = ({
  nome,
  sobrenome,
  interesses: [interesse],
  familia: { mae }
}) => {
  return `Olá, meu nome é ${nome} ${sobrenome} e meu principal hobbie é ${interesse}. O nome da minha mãe é ${mae}.`
}

console.log(historia(usuario))
