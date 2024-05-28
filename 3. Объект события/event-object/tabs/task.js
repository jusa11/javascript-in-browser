'use strict'
const tabs = Array.from(document.querySelectorAll('.tabs'))

tabs.forEach(tab => {
	const tabItem = Array.from(tab.querySelectorAll('.tab'))
	const tabContent = Array.from(tab.querySelectorAll('.tab__content'))

	tabItem.forEach(item => {
		item.addEventListener('click', () => {
			let tabActive = tabItem.findIndex(el => el.classList.contains('tab_active'))
			tabItem[tabActive].classList.remove('tab_active')
			tabContent[tabActive].classList.remove('tab__content_active')

			let tabIndex = tabItem.indexOf(item)
			tabItem[tabIndex].classList.add('tab_active')
			tabContent[tabIndex].classList.add('tab__content_active')
		})
	})
})