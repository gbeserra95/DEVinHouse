// Select main container
export const displayBooks = books => {
  const main = document.getElementById('products')

  for (let i = 0; i < books.length; i++) {
    //Div Products
    let divProduct = document.createElement('div')
    divProduct.classList.add('product')
    divProduct.id = books[i].id

    // Div Image
    let divImage = document.createElement('div')
    divImage.classList.add('div-image')
    divImage.style.backgroundImage = `url('${books[i].url}')`

    // Book Title
    let bookTitle = document.createElement('h3')
    bookTitle.classList.add('title')
    bookTitle.innerHTML = books[i].title

    // Div Subtitle
    let divSubtitle = document.createElement('div')
    divSubtitle.classList.add('div-subtitle')

    // Div Author
    let divAuthor = document.createElement('div')
    divAuthor.innerHTML = books[i].author

    // Div Date
    let divDate = document.createElement('div')
    divDate.innerHTML = books[i].date

    // Div Payment
    let divPayment = document.createElement('div')
    divPayment.classList.add('div-payment')

    // Book Price
    let bookPrice = document.createElement('h1')
    bookPrice.innerHTML = 'R$' + books[i].price

    // Installment Options
    let selectBox = document.createElement('select')
    selectBox.name = `spayment-${books[i].id}`
    selectBox.id = `spayment-${books[i].id}`

    // Append Children
    main.appendChild(divProduct)

    divProduct.appendChild(divImage)
    divProduct.appendChild(bookTitle)
    divProduct.appendChild(divSubtitle)

    divSubtitle.appendChild(divAuthor)
    divSubtitle.appendChild(divDate)

    divProduct.appendChild(divPayment)

    divPayment.appendChild(bookPrice)
    divPayment.appendChild(selectBox)

    for (let j = 1; j <= books[i].instalments; j++) {
      let newOption = document.createElement('option')
      newOption.innerHTML = `${j}x de R$${(books[i].price / j).toFixed(2)}`

      selectBox.appendChild(newOption)
    }
  }
}
