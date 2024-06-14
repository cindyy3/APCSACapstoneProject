const paddle = document.getElementById('paddle');
const ball = document.getElementById('ball');
const startOverButton = document.getElementById('start-over');

let paddleX = 250;
let ballX = 290;
let ballY = 150;
let dx = 2;
let dy = 2;
let interval;

document.addEventListener('mousemove', function(e) {
	paddleX = e.clientX - 50;
	if (paddleX < 0) paddleX = 0;
	if (paddleX > 500) paddleX = 500;
	paddle.style.left = paddleX + 'px';
});

function moveBall() {
	ballX += dx;
	ballY += dy;

	if (ballX < 0 || ballX > 580) {
		dx = -dx;
	}
	if (ballY < 0) {
		dy = -dy;
	}

	if (ballY > 370 && ballX > paddleX && ballX < paddleX + 100) {
		dy = -dy;
		ballY = 360;
	}

	if (ballY > 400) {
		alert('Game Over!');
		clearInterval(interval);
		startOverButton.style.display = 'inline';
	}

	ball.style.left = ballX + 'px';
	ball.style.top = ballY + 'px';
}

function startGame() {
	paddleX = 250;
	ballX = 290;
	ballY = 150;
	dx = 2;
	dy = 2;
	startOverButton.style.display = 'none';
	interval = setInterval(moveBall, 10);
}

interval = setInterval(moveBall, 10);

startOverButton.addEventListener('click', function() {
	clearInterval(interval);
	startGame();
});