// 'use strict'
// const bookElement = document.getElementById("book");
// const controlElements = document.querySelector(".book__controls");

// controlElements.addEventListener("click", function (event) {
// 	event.preventDefault();

// 	const { size, textColor, bgColor } = event.target.dataset;

// 	const elementClassArray = event.target.classList;
// 	const activeControl = event.target
// 		.closest(".book__control")
// 		.querySelectorAll("a");

// 	activeControl.forEach((element) => {
// 		element.classList.remove(elementClassArray[0] + "_active");
// 	});

// 	event.target.classList.add(elementClassArray[0] + "_active");

// 	function removePreviousClassName(className) {
// 		for (value of bookElement.classList) {
// 			if (value.includes(className)) {
// 				bookElement.classList.remove(value);
// 			}
// 		}
// 	}

// 	if (size || event.target.className === "font-size font-size_active") {
// 		removePreviousClassName("book_fs-");
// 		bookElement.classList.add("book_fs-" + size);
// 	}

// 	if (textColor) {
// 		removePreviousClassName("book_color-");
// 		bookElement.classList.add("book_color-" + textColor);
// 	}

// 	if (bgColor) {
// 		removePreviousClassName("book_bg-");
// 		bookElement.classList.add("book_bg-" + bgColor);
// 	}
// });








'use strict'
const book = document.getElementById('book');
const bookTag = Array.from(book.getElementsByTagName('a'));
let sizeIndex = null;
let colorIndex = null;
let backIndex = null;


bookTag.forEach(item => {

	const selectSize = (event) => {
		if (item.closest('.book__control_font-size')) {

			/* Панель управления размером текста*/
			if (item.closest('.book__control').querySelector('.font-size_active')) {
				item.closest('.book__control').querySelector('.font-size_active').classList.remove('font-size_active');
			}

			if (book.classList.contains(sizeIndex)) {
				book.classList.remove(sizeIndex);
			}

			/* изменение размера текста */
			item.classList.add('font-size_active');
			book.classList.add(`book_fs-${item.getAttribute('data-size')}`)

			sizeIndex = `book_fs-${item.getAttribute('data-size')}`;
		}

		if (item.closest('.book__control_color')) {

			// Панель управления цветом текста
			if (item.closest('.book__control').querySelector('.color_active')) {
				item.closest('.book__control').querySelector('.color_active').classList.remove('color_active');
			}

			if (book.classList.contains(colorIndex)) {
				book.classList.remove(colorIndex);
			}

			/* изменение цвета текста */
			item.classList.add('color_active');
			book.classList.add(`book_color-${item.getAttribute('data-text-color')}`)

			colorIndex = `book_color-${item.getAttribute('data-text-color')}`;
		}

		if (item.closest('.book__control_background')) {

			// Панель управления фоном
			if (item.closest('.book__control').querySelector('.color_active')) {
				item.closest('.book__control').querySelector('.color_active').classList.remove('color_active');
			}

			if (book.classList.contains(backIndex)) {
				book.classList.remove(backIndex);

			}
			/* изменение цвета фона */
			item.classList.add('color_active');
			book.classList.add(`book_bg-${item.getAttribute('data-bg-color')}`)

			backIndex = `book_bg-${item.getAttribute('data-bg-color')}`;
		}

		event.preventDefault();
	}

	item.addEventListener('click', selectSize);
});