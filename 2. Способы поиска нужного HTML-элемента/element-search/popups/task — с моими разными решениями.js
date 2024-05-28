'use strict'
/* объявление пермеменных */
const modalMain = document.getElementById('modal_main');							// первое окно
const modalSuccess = document.getElementById('modal_success');					// второе окно
const modalClose = Array.from(document.querySelectorAll('.modal__close'));	// закрыть окно на крестик
const modalBtn = Array.from(document.querySelectorAll('.btn'));					// кнопки


// функции показа, перехода и удаления окон
const modalActive = () => modalMain.classList.add('modal_active');		// при загрузке страницы показ первого окна
const successShow = () => modalSuccess.classList.add('modal_active');	// показ второго окна при клике на кнопку

// показ первого окна
modalActive();



const getModalClose = (index) => modalClose[index];
const getModalBtn = (index) => modalBtn[index];

for (let i = 0; i < modalClose.length; i++) {
	getModalClose(i).onclick = () => getModalClose(i).closest('.modal').classList.remove('modal_active');

}

for (let i = 0; i < modalBtn.length; i++) {
	getModalBtn(i).onclick = () => {
		if (getModalBtn(i) === modalBtn[0]) {
			getModalBtn(i).closest('.modal').classList.remove('modal_active');
			successShow();
		}
		else {
			getModalBtn(i).closest('.modal').classList.remove('modal_active');
		}
	}

}





/* Реализовано все, но не универсально */
// 'use strict'
// /* объявление пермеменных */
// let modalMain = document.getElementById('modal_main');							// первое окно
// let modalSuccess = document.getElementById('modal_success');					// второе окно
// let showSuccess = document.querySelector('.show-success');						// кнопка сделать хорошо
// let btnSuccess = document.querySelector('.btn_success');							// кнопка Хорошо сделано!
// let modalClose = Array.from(document.querySelectorAll('.modal__close'));	// закрыть окно на крестик


// // функции показа, перехода и удаления окон
// const modalActive = () => modalMain.classList.add('modal_active');		// при загрузке страницы показ первого окна
// const successShow = () => modalSuccess.classList.add('modal_active');	// показ второго окна при клике на кнопку

// // показ первого окна
// modalActive();



// const getModalClose = (index) => modalClose[index];

// for (let i = 0; i < modalClose.length; i++) {
// 	getModalClose(i).onclick = () => getModalClose(i).closest('.modal').classList.remove('modal_active');
// }

// showSuccess.onclick = () => {
// 	showSuccess.closest('.modal').classList.remove('modal_active');
// 	successShow();
// }





/* реализовано закрытие по крестику */
// 'use strict'
// /* объявление пермеменных */
// let modalMain = document.getElementById('modal_main');			// первое окно
// let modalSuccess = document.getElementById('modal_success');	// второе окно
// let showSuccess = document.querySelector('.show-success');		// кнопка сделать хорошо
// let btnSuccess = document.querySelector('.btn_success');			// кнопка Хорошо сделано!
// let modalClose = Array.from(document.querySelectorAll('.modal__close'));	// закрыть окно на крестик
// let arrayClose = Array.from(modalClose);								// массив крестиков из первого и второго окна





















