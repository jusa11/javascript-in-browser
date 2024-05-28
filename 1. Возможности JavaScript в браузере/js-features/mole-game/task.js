'use strict'
const hole = Array.from(document.querySelectorAll('.hole'))
const dead = document.getElementById('dead')
const lost = document.getElementById('lost')

const resetCount = () => {
	dead.innerHTML = 0
	lost.innerHTML = 0
}

hole.forEach(el => {
	el.onclick = () => {
		el.classList.contains('hole_has-mole') ? dead.innerHTML++ : lost.innerHTML++
		
		if (dead.textContent === '10') {
			alert('Win')
			resetCount()
			clearInterval(next)
		}
		if (lost.textContent === '5') {
			alert('Lost')
			resetCount()
			clearInterval(next)
		}
	}
});



