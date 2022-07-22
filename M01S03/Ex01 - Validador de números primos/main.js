function isPrime(n) {
  if (n <= 1) return false

  for (let i = 2; i < n; i++) if (n % i == 0) return false

  return true
}

window.onload = function () {
  let buttom = document.getElementById('btn')
  let myInput = document.getElementById('prime-number')

  buttom.addEventListener('click', function () {
    let myValue = parseInt(myInput.value)
    if (isPrime(myValue)) {
      alert(`O número ${myValue} é primo.`)
    } else {
      alert(`O número ${myValue} NÃO é primo.`)
    }
  })
}
