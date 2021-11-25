class Book {
  constructor(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
    this.loaned = false
  }

  loanBook() {
    this.loaned = true
  }
}

class HQ extends Book {
  constructor(title, author, year, illustrator) {
    super(title, author, year)
    this.illustrator = illustrator
    this.loaned = false
  }

  static sortBooks = books => {
    return books.sort((a, b) => a.year - b.year)
  }
}

const book01 = new Book(
  "Harry Potter and the Philosopher's Stone",
  'J. K. Rowling',
  1997
)

const book02 = new Book(
  'Harry Potter and the Chamber of Secrets',
  'J. K. Rowling',
  1998
)

const book03 = new Book(
  'Harry Potter and the Prisoner of Azkaban',
  'J. K. Rowling',
  1999
)

const hq01 = new HQ('Amazing Spider-Man #01', 'Stan Lee', 1969, 'Steve Ditko')
const hq02 = new HQ('Amazing Spider-Man #15', 'Stan Lee', 1970, 'Steve Ditko')

console.log(HQ.sortBooks([book01, book02, book03, hq01, hq02]))
