class Card {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.value = Math.floor(Math.random() * 10) + 1;
	}

	show() {
		rect(this.x, this.y, this.w, this.h, 10);
	}

	getYCoordinate() {
		return this.y;
	}
}
