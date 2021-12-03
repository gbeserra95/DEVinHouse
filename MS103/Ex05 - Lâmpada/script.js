const btn = document.getElementById('btn')
const img = document.getElementById('div-image')

btn.addEventListener('click', () => {
  if (img.classList.contains('toggle')) {
    img.classList.remove('toggle')
  } else {
    img.classList.add('toggle')
  }
})
