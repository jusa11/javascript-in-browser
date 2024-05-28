'use strict'
const reveal = Array.from(document.querySelectorAll('.reveal'));

const revealS = (index) => reveal[index];

for (let i = 0; i < reveal.length; i++) {
	revealS(i);

	function onReveal() {
		const { innerHeight } = window;
		const { top } = revealS(i).getBoundingClientRect();


		if (top < innerHeight && top > 0) {
			revealS(i).classList.add("reveal_active");
		} else {
			revealS(i).classList.remove("reveal_active");
		}
	}

	window.addEventListener('scroll', onReveal);
}


