import {_circle, _gameOver} from "./selectors.js"
import { myCircle, myInterval1 } from "../script.js"

let myInterval2

export const checkCircle = () => {
    if (myCircle.width < 1 || myCircle.width > 500){
        clearInterval(myInterval1)
        clearInterval(myInterval2)
        gameOver()
    }
}

export const startGame = () => {
    myInterval2 = setInterval(() => {myCircle.reduceCircle()}, 1000)
    _circle.innerHTML = "There you go!"
}

const gameOver = () => {
    _circle.style.visibility = "hidden"
    _gameOver.style.visibility = "visible"
}