'use strict'
/* объявление пермеменных */
let modalMain = document.getElementById('modal_main');			// первое окно
let modalSuccess = document.getElementById('modal_success');	// второе окно
let showSuccess = document.querySelector('.show-success');		// кнопка сделать хорошо
let btnSuccess = document.querySelector('.btn_success');			// кнопка Хорошо сделано!
let modalClose = document.querySelectorAll('.modal__close');	// закрыть окно на крестик
let arrayClose = Array.from(modalClose);								// массив крестиков из первого и второго окна


// функции показа, перехода и удаления окон
const modalActive = () => modalMain.classList.add('modal_active');		// при загрузке страницы показ первого окна
const successShow = () => modalSuccess.classList.add('modal_active');	// показ второго окна при клике на кнопку

// закрытие при клике на кнопку
const closeBtnModal = (modal) => {
	modal.classList.remove('modal_active');
}

// закрытие при клике на крестик
const closeModal = (index) => modalClose[index];
for (let i = 0; i < modalClose.length; i++) {
	let Xclose = closeModal(i);

	Xclose.onclick = () => {
		let modal = this.closest('.modal');
		modal.classList.remove('modal_active');
	}
}

// показ первого окна
modalActive();

// при нажатии на кнопку переход ко второму окну
showSuccess.onclick = () => {
	closeBtnModal(modalMain);
	successShow();
}

// при нажатии на кнопку Хорошо сделано! закрывает второе окно
btnSuccess.onclick = () => {
	closeBtnModal(modalSuccess);
}

