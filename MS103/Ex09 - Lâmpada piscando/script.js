const img = document.getElementById('div-image')

let myVar = setInterval(function () {
  if (img.classList.contains('toggle')) {
    console.log('toggle')
    img.classList.remove('toggle')
  } else {
    img.classList.add('toggle')
  }
}, 2000)
