'use strict'
const menuLink = Array.from(document.querySelectorAll('.menu__link'))
const menuSub = Array.from(document.querySelectorAll('.menu_sub'))

menuLink.forEach((item) => {
	item.onclick = (event) => {
		let target = item.nextElementSibling
		target.classList.toggle('menu_active')

		menuSub.forEach(el => el !== target ? el.classList.remove('menu_active') : false)

		event.preventDefault()
	}
})