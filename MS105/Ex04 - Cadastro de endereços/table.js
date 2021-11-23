// My local storage
var myLocalStorage = 'myAdress'

// My main container
let container = document.getElementById('container')

function noDataAtAll() {
  container.innerText = 'Não há dados para serem visualizados.'
}

function createTable(myObj) {
  console.log(myObj)
  // My table tags
  let table = document.createElement('table')
  let tableHeadRow = document.createElement('tr')

  // Create table
  container.appendChild(table)
  table.appendChild(tableHeadRow)

  for (let i in myObj[0]) {
    let tableHeadColumn = document.createElement('th')
    tableHeadRow.appendChild(tableHeadColumn)
    tableHeadColumn.innerHTML = i
  }

  for (let i = 0; i < myObj.length; i++) {
    let tableRow = document.createElement('tr')
    table.appendChild(tableRow)
    for (let j in myObj[i]) {
      let tableColumn = document.createElement('td')
      tableRow.appendChild(tableColumn)
      tableColumn.innerHTML = myObj[i][j]
    }
  }
}

// Upload data from local storage
if (localStorage.getItem(myLocalStorage)) {
  createTable(JSON.parse(localStorage.getItem(myLocalStorage)))
} else {
  noDataAtAll()
}
