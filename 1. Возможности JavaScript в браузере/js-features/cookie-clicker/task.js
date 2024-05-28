'use strict'
const cookieImg = document.querySelector('.clicker__cookie')
const clickerCounter = document.getElementById('clicker__counter')
const speedCounter = document.getElementById('speed__counter')
let speed = 0

let counter = clickerCounter.textContent
let beforeTime = new Date()


cookieImg.onclick = () => {
	let curerentTIme = new Date()
	let spedClick = (curerentTIme - beforeTime) / 1000

	speed = 1 / spedClick
	speedCounter.innerHTML = speed
	beforeTime = curerentTIme

	clickerCounter.innerHTML = ++counter
	counter % 2 !== 0 ? cookieImg.width *= 1.2 : cookieImg.width /= 1.2
}






