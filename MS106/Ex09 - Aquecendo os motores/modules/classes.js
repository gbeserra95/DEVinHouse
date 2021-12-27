import {_circle, _score} from "./selectors.js"
import { score } from "../script.js"

export class Circle {
    constructor() {
        this.width = 250.0,
        this.height = 250.0,
        this.rate = 1.0
    }

    newRate(value){
        this.rate += value
    }

    increaseCircle() {
        this.width += 1
        this.height += 1
        _score.innerHTML = score + " clicks!"
        _circle.style.width = this.width + 'px'
        _circle.style.height = this.height + 'px'
    }

    reduceCircle() {
        this.width -= this.rate
        this.height -= this.rate
        _circle.style.width = this.width + 'px'
        _circle.style.height = this.height + 'px'

        if (this.width < 50) {
            _circle.innerHTML = ""
        } else if (this.width < 100) {
            _circle.innerHTML = "Hurry!"
        }
    }
}