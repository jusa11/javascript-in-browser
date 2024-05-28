'use strict'
const dropDownList = Array.from(document.querySelectorAll('.dropdown__value'))
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'))

dropDownList.forEach(el => el.addEventListener('click', () => el.nextElementSibling.classList.toggle('dropdown__list_active')))

dropdownItem.forEach(el => {
	el.addEventListener('click', (event) => {
		el.closest('.dropdown__list').previousElementSibling.innerHTML = el.textContent
		el.closest('.dropdown__list_active').classList.remove('dropdown__list_active')
		event.preventDefault()
	})
})


