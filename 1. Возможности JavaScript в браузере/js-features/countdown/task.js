'use strict'
// 1 задача
/* let seconds = document.getElementById('seconds')

const timerSecond = setInterval(() => {
	let timer = seconds.textContent - 1
	seconds.innerHTML = timer

	if (seconds.textContent === '0') {
		alert('Вы победили в конкурсе!')
		clearInterval(timerSecond)
	}
}, 1000) */

// Задача 2

let ss = document.getElementById('seconds')
let mm = document.getElementById('minutes')
let hh = document.getElementById('hours')

let currentDate = new Date()
let timerDate = currentDate.setHours(+hh.textContent, +mm.textContent, +ss.textContent)


const timer = setInterval(() => {

	timerDate = new Date(timerDate - 1000)

	let hhTimerDate = timerDate.getHours()
	let mmTimerDate = timerDate.getMinutes()
	let ssTimerDate = timerDate.getSeconds()

	hh.innerHTML = hhTimerDate
	mm.innerHTML = mmTimerDate
	ss.innerHTML = ssTimerDate

	if (ssTimerDate < 10) {
		ss.innerHTML = `0${ssTimerDate}`
	}

	if (mmTimerDate < 10) {
		mm.innerHTML = `0${mmTimerDate}`
	}

	if (hhTimerDate < 10) {
		hh.innerHTML = `0${hhTimerDate}`
	}

	console.log(timerDate)

	if (hhTimerDate === 0 && mmTimerDate === 0 && ssTimerDate === 0) {
		alert('Вы выйграли!')
		clearInterval(timer)
	}

}, 1000)



// 3 задача
/* let seconds = document.getElementById('seconds')

const timerSecond = setInterval(() => {
	let timer = seconds.textContent - 1

	if (timer < 10) {
		timer = `0${timer}`
	}
	seconds.innerHTML = timer

	if (seconds.textContent === '00') {
		alert('Вы победили в конкурсе!')
		window.location.href = 'file.zip'
		clearInterval(timerSecond)
	}
}, 1000) */