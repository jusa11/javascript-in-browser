'use strict'
const rotator = Array.from(document.querySelectorAll('.rotator__case'));


let count = 0;



setInterval(() => {
	if (count <= rotator.length - 1) {
		// console.log(rotator[count].closest('.card').querySelector('.rotator__case').classList.remove('rotator__case_active'));

		if (rotator[count].classList.contains('rotator__case_active')) {
			rotator[count].classList.remove('rotator__case_active');
		}
		count++
		if (count > rotator.length - 1) {
			count = 0;
			rotator[count].classList.add('rotator__case_active');
		}
		rotator[count].classList.add('rotator__case_active');
	}
}, 1000);



// setInterval(() => {
// 	if (count <= rotator.length - 1) {
// 		// console.log(rotator[count].closest('.card').querySelector('.rotator__case').classList.remove('rotator__case_active'));

// 		if (rotator[count].classList.contains('rotator__case_active')) {
// 			rotator[count].classList.remove('rotator__case_active');
// 			console.log('если ' + count);
// 		}
// 		else {
// 			rotator[count++].classList.add('rotator__case_active');
// 			console.log('просто ' + count);
// 		}

// 	}
// 	else {
// 		count = 0;
// 		console.log('иначе');
// 	}
// }, 1000);




// setInterval(() => {
// 	if (count <= rotator.length - 1) {
// 		console.log(rotator[count++]);
// 	}
// 	else {
// 		count = 0;
// 		console.log(rotator[count++])
// 	}
// }, 1000);