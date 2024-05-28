'use strict'
const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'))

function nextCase() {
	rotatorCase.forEach((el, index) => {
		el.classList.add('rotator__case_active')

		console.log(rotatorCase[index + 1])

		if (rotatorCase[index - 1] < 0 ? rotatorCase[rotatorCase.length - 1].classList.contains('rotator__case_active')) {
			rotatorCase[index - 1].classList.remove('rotator__case_active')
		}

	});
}

setInterval(nextCase, 1000)
