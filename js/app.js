// variable declaration
var scoreSec = document.getElementById("score");
var score = 0;
var Enemy = function(x, y, speed) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started
	this.x = x;
	this.y = y;
	this.speed = speed;
	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	this.x = this.x + this.speed * dt;
	if (this.x == 0) {
		this.speed = 100 + Math.floor(Math.random() * 400);
	}
	if (this.x > 500) {
		this.speed = 100 + Math.floor(Math.random() * 400);
		this.x = 0;
	}
	console.log(player.x);
	console.log(this.x);
	if (player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 80 && player.y + 80 > this.y) {
		player.x = 200;
		player.y = 400;
		scoreSec.innerHTML = score;
		Swal.fire({
			title: "Gameover",
			html: "score " + score,
			confirmButtonText: "Play again",
		}).then(() => {
			window.location.reload();
		})
	}
}
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Gamer {
	constructor(x, y, sprite) {
		this.x = x;
		this.y = y;
		this.sprite = 'images/char-pink-girl.png';
	}
}
Gamer.prototype.update = function(dt) {}
Gamer.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var enemyStatus = [60, 143, 226];
enemyStatus.map((positionY) => {
	var enemyItem = new Enemy(0, positionY, 150);
	allEnemies.push(enemyItem);
})
var player = new Gamer(200, 400);
Gamer.prototype.handleInput = function(key) {
	switch (key) {
		case 'left':
			this.x = this.x - 101;
			if (this.x < 0) {
				this.x = 0;
			}
			break;
		case 'right':
			this.x = this.x + 101;
			if (this.x > 404) {
				this.x = 404;
			}
			break;
		case 'down':
			this.y = this.y + 83;
			if (this.y > 404) {
				this.y = 404;
			}
			break;
		case 'up':
			this.y = this.y - 83;
			if (this.y <= 60) {
				setTimeout(() => {
					this.x = 200;
					this.y = 400;
					score = score + 1;
					scoreSec.innerHTML = score;
				}, 100)
			}
	}
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};
	player.handleInput(allowedKeys[e.keyCode]);
});
