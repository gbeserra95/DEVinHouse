// Array of books
let books = []

class Book {
  constructor(id, title, author, date, url, price) {
    this.id = id
    this.title = title
    this.author = author
    this.date = date
    this.url = url
    this.price = parseFloat(price).toFixed(2)
    if (this.price > 100) {
      this.instalments = 4
    } else {
      this.instalments = 1
    }
  }
}

const book1 = new Book(
  `bookId-${books.length + 1}`,
  'Escravidão – Volume 1: Do primeiro leilão de cativos em Portugal até a morte de Zumbi dos Palmares',
  'Laurentino Gomes',
  '20 ago 2019',
  'assets/escravidao1.jpg',
  '29.90'
)
books.push(book1)

const book2 = new Book(
  `bookId-${books.length + 1}`,
  'Escravidão - Volume 2: Da corrida do ouro em Minas Gerais até a chegada da corte de dom João ao Brasil',
  'Laurentino Gomes',
  '10 jun 2021',
  'assets/escravidao2.jpg',
  '30.86'
)
books.push(book2)

const book3 = new Book(
  `bookId-${books.length + 1}`,
  'Sapiens: Uma breve história da humanidade',
  'Yuval Noah Harari',
  '13 nov 2020',
  'assets/sapiens.jpg',
  '44.99'
)
books.push(book3)

const book4 = new Book(
  `bookId-${books.length + 1}`,
  'Crash: Uma breve história da economia',
  'Alexandre Versignassi',
  '09 set 2019',
  'assets/cash.jpg',
  '23.83'
)
books.push(book4)

const book5 = new Book(
  `bookId-${books.length + 1}`,
  'Nômade Digital: um guia para você viver e trabalhar como e onde quiser',
  'Matheus de Souza',
  '31 jul 2019',
  'assets/nomade.jpg',
  '42.03'
)
books.push(book5)

const book6 = new Book(
  `bookId-${books.length + 1}`,
  'A Arte da Guerra: Os treze capítulos completos',
  'André da Silva Bueno',
  '17 abr 2008',
  'assets/arte.jpg',
  '30.89'
)
books.push(book6)

const book7 = new Book(
  `bookId-${books.length + 1}`,
  'Os 7 Hábitos das Pessoas Altamente Eficazes - Edição Customizada: Lições poderosas para a transformação pessoal',
  'Stephen R. Covey',
  '01 jan 2017',
  'assets/habitos.jpg',
  '31.90'
)
books.push(book7)

const book8 = new Book(
  `bookId-${books.length + 1}`,
  'Suzane: assassina e manipuladora',
  'Ulisses Campbell',
  '21 jan 2020',
  'assets/suzane.jpg',
  '59.00'
)
books.push(book8)

const book9 = new Book(
  `bookId-${books.length + 1}`,
  'Elize Matsunaga: A mulher que esquartejou o marido',
  'Ulisses Campbell',
  '20 ago 2021',
  'assets/elize.jpg',
  '54.40'
)
books.push(book9)

const book10 = new Book(
  `bookId-${books.length + 1}`,
  'Ielts 14 Academic Sb With Answers With Audio - Authentic Practice Tests',
  'Cambridge English',
  '01 jan 2019',
  'assets/ielts.jpg',
  '330.14'
)
books.push(book10)

export default books
