const _progressBar = document.getElementById("fill")

class Bar {
	constructor() {
		this.width = 0
	}

	increaseBar() {
		if(this.width === 101) {
			window.alert("Concluído!")
			clearInterval(myInterval)
		} else {
			let hue = this.width * 1.2
			_progressBar.style.backgroundColor = `hsl(${hue}, 80%, 50%)`
			_progressBar.style.width = `${this.width}%`
			this.width++
		}
	}
}

const myBar = new Bar()

const myInterval = setInterval(() => {
	myBar.increaseBar()
}, 100)