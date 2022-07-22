import {_circle} from "./modules/selectors.js"
import { Circle } from "./modules/classes.js"
import {checkCircle, startGame} from "./modules/functions.js"

export const myCircle = new Circle()
export const myInterval1 = setInterval(checkCircle, 300)
export let score = 0

const rate = 0.3

let begin = true

_circle.addEventListener("click", () => {
    if (begin) {
        startGame()
        begin = false
    } else {
        score++
        myCircle.increaseCircle()
        myCircle.newRate(rate)
    }
})

