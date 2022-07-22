const btn = document.getElementById('btn')
const img = document.getElementById('div-image')

if (localStorage.getItem('toggle') === null) {
  localStorage.setItem('toggle', false)
} else if (localStorage.getItem('toggle') === 'true') {
  img.classList.add('toggle')
}

btn.addEventListener('click', () => {
  if (localStorage.getItem('toggle') === 'true') {
    localStorage.setItem('toggle', 'false')
    img.classList.remove('toggle')
  } else {
    localStorage.setItem('toggle', 'true')
    img.classList.add('toggle')
  }
})
