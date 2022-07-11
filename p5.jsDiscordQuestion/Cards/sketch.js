function setup() {
	createCanvas(displayWidth, displayHeight);
	cards = [];
}

function draw() {
	background(220);

	for (let i = 0; i < 10; i++) {
		const xCoordinate = (i * windowWidth) / 5;
		let yCoordinate;
		const cardWidth = windowWidth / 5;
		const cardHeight = windowHeight / 2;

		if (i >= 5) {
			yCoordinate = windowHeight / 2;
		} else {
			yCoordinate = 0;
		}

		cards[i] = new Card(xCoordinate, yCoordinate, cardWidth, cardHeight);
	}

	cards[0].show();
	cards[1].show();
	cards[2].show();
	cards[3].show();
	cards[4].show();
	cards[5].show();
}
