const message = document.getElementById('div-btn')
const img = document.getElementById('div-image')

var i = 5

var myVar = setInterval(function () {
  message.innerHTML = `A lâmpada acenderá em ${i} segundos.`
  if (i == 0) {
    clear()
  }
  i--
}, 1000)

function clear() {
  clearInterval(myVar)
  message.innerHTML = ''
  img.classList.add('toggle')
}
