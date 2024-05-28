class Game {
	constructor(container) {
		this.container = container;
		this.wordElement = container.querySelector('.word');
		this.winsElement = container.querySelector('.status__wins');
		this.lossElement = container.querySelector('.status__loss');
		this.timeElement = container.querySelector('.status__time');

		this.reset();
		this.timer();

		this.registerEvents();
	}

	reset() {
		this.setNewWord();
		this.winsElement.textContent = 0;
		this.lossElement.textContent = 0;
	}

	timer() {
		setInterval(() => {
			this.timeElement.textContent = this.wordLength;
			this.wordLength -= 1;
			if (this.wordLength < 0) {
				this.fail();
			}
		}, 1000);
	}

	registerEvents() {
		window.addEventListener('keypress', (e) => {
			e.key === this.currentSymbol.textContent ? this.success() : this.fail();
		});
	}

	success() {
		this.currentSymbol.classList.add('symbol_correct');
		this.currentSymbol = this.currentSymbol.nextElementSibling;
		if (this.currentSymbol !== null) {
			return;
		}

		if (++this.winsElement.textContent === 10) {
			alert('Победа!');
			this.reset();
		}
		this.setNewWord();
	}

	fail() {
		if (++this.lossElement.textContent === 5) {
			alert('Вы проиграли!');
			this.reset();
		}
		this.setNewWord();
	}

	setNewWord() {
		const word = this.getWord();


		this.renderWord(word);
	}

	getWord() {
		const words = [
			'bob',
			'awesome',
			'netology',
			'hello',
			'kitty',
			'rock',
			'youtube',
			'popcorn',
			'cinema',
			'love',
			'javascript',
			'я люблю kitkat'			
		],
			index = Math.floor(Math.random() * words.length);
		this.wordLength = words[index].length;

		return words[index];
	}

	renderWord(word) {
		const html = [...word]
			.map(
				(s, i) =>
					`<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
			)
			.join('');
		this.wordElement.innerHTML = html;

		this.currentSymbol = this.wordElement.querySelector('.symbol_current');
	}


}

new Game(document.getElementById('game'));
