const price = document.getElementById('input-01')
const discount = document.getElementById('input-02')
const btn = document.getElementById('btn')

const total = document.getElementById('total')
const discountValue = document.getElementById('discount')
const toPay = document.getElementById('to-pay')

const calculate = (value, discount) => {
  return [
    value,
    value * discount * (1 / 100),
    value - value * discount * (1 / 100)
  ]
}

btn.addEventListener('click', () => {
  let values = calculate(price.value, discount.value)
  console.log(values)
  total.innerHTML = `<strong>Total:</strong> R$ ${(
    Math.round(values[0] * 100) / 100
  ).toFixed(2)}`
  discountValue.innerHTML = `<strong>Descontos:</strong> R$ ${(
    Math.round(values[1] * 100) / 100
  ).toFixed(2)}`
  toPay.innerHTML = `<strong>Valor a pagar:</strong> R$ ${(
    Math.round(values[2] * 100) / 100
  ).toFixed(2)}`
})
