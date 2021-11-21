function isEven(n) {
  if (n % 2 != 0) return false

  return true
}

window.onload = function () {
  let buttom = document.getElementById('btn')
  let myInput = document.getElementById('prime-number')

  buttom.addEventListener('click', function () {
    let myValue = parseInt(myInput.value)
    if (isEven(myValue)) {
      alert(`O número ${myValue} é par.`)
    } else {
      alert(`O número ${myValue} é ímpar.`)
    }
  })
}
