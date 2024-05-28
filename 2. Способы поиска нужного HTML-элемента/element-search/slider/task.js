'use strict'
const sliderArrow = Array.from(document.querySelectorAll('.slider__arrow'))
const sliderItem = Array.from(document.querySelectorAll('.slider__item'))
const sliderDot = Array.from(document.querySelectorAll('.slider__dot'))

const arrowManage = (arr, item) => {
	let activeSlide = arr.findIndex(el => el === document.querySelector('.slider__item_active'))

	if (item.classList.contains('slider__arrow_next')) {
		arr[activeSlide].classList.remove('slider__item_active')
		sliderDot[activeSlide].classList.remove('slider__dot_active')
		activeSlide += 1
		activeSlide > arr.length - 1 ? activeSlide = 0 : false
		arr[activeSlide].classList.add('slider__item_active')
		sliderDot[activeSlide].classList.add('slider__dot_active')
	}

	if (item.classList.contains('slider__arrow_prev')) {
		arr[activeSlide].classList.remove('slider__item_active')
		sliderDot[activeSlide].classList.remove('slider__dot_active')
		activeSlide -= 1
		activeSlide < 0 ? activeSlide = arr.length - 1 : false
		arr[activeSlide].classList.add('slider__item_active')
		sliderDot[activeSlide].classList.add('slider__dot_active')
	}
}

const dotManage = (arr, item) => {
	let activeSlide = sliderItem.findIndex(el => el === document.querySelector('.slider__item_active'))

	sliderItem[activeSlide].classList.remove('slider__item_active')
	arr[activeSlide].classList.remove('slider__dot_active')
	activeSlide = arr.findIndex(el => el === item)
	sliderItem[activeSlide].classList.add('slider__item_active')
	arr[activeSlide].classList.add('slider__dot_active')
}


sliderArrow.forEach(arrow => arrow.onclick = () => arrowManage(sliderItem, arrow))

sliderDot.forEach((dot) => dot.onclick = () => dotManage(sliderDot, dot))