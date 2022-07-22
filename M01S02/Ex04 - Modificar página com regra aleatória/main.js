function randomPage() {
  var greaters = 0,
    smallers = 0,
    luckNumber = 100,
    luckNumberAppearance = 0

  for (let i = 0; i < 999; i++) {
    //Random function
    let num = Math.floor(Math.random() * 1001) + 1

    //Check if the number is greater than 500
    if (num > 500) {
      greaters++
    } else {
      smallers++
    }

    //Check how many appearances the luckNumber has
    if (num == luckNumber) {
      luckNumberAppearance++
    }
  }

  console.log(`greater = ${greaters}`)
  console.log(`smallers = ${smallers}`)
  console.log(`luck number appearance = ${luckNumberAppearance}`)

  if (luckNumberAppearance == 1) {
    document.body.style.backgroundImage = 'none'
    document.body.style.background = 'orange'
  } else if (luckNumberAppearance > 1) {
    document.body.style.backgroundImage = 'none'
    document.body.style.background = 'black'
  } else if (greaters > smallers) {
    document.body.style.backgroundImage = `url("https://picsum.photos/200/300")`
  } else if (smallers >= greaters) {
    document.body.style.backgroundImage = `url("https://via.placeholder.com/500")`
  }
}

window.onload = randomPage

document.getElementById('btn').addEventListener('click', randomPage)
