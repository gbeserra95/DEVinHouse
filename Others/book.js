class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.booked = false
  }

  bookTitle() {
    this.booked = true
    return `Você reservou o livro ${this.title}, de ${this.author}, ${this.year}`
  }

  static sortBooksByYear(books) {
    return books.sort((a, b) => a.year - b.year)
  }
}

const book1 = new Book('The Shining', 'Stephen King', 1977)
const book2 = new Book(
  "Harry Potter and the Philosopher's Stone",
  'J.K Rowling',
  1997
)
const book3 = new Book('1984', 'George Orwell', 1949)
const book4 = new Book('Escravidão: Volume I', 'Laurentino Gomes', 2019)
const book5 = new Book(
  'Sapiens: A Brief History of Humankind',
  'Yuval Harari',
  2011
)

book1.bookTitle()
book2.bookTitle()

const myBooks = [book1, book2, book3, book4, book5]

console.log(Book.sortBooksByYear(myBooks))
