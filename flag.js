const flags = [
	{ country: "France", src: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" },
	{ country: "Germany", src: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" },
	{ country: "Italy", src: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" },
	{ country: "Japan", src: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" },
	{ country: "Brazil", src: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg" },
	{ country: "Canada", src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" },
	{ country: "Australia", src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg" },
	{ country: "India", src: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" },
	{ country: "Russia", src: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg" },
	{ country: "China", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png" },
	{ country: "United Kingdom", src: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" },
	{ country: "South Africa", src: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg" },
	{ country: "Mexico", src: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" },
	{ country: "Argentina", src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" },
	{ country: "South Korea", src: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" },
	{ country: "Spain", src: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg" },
	{ country: "Nigeria", src: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg" },
	{ country: "Egypt", src: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" },
	{ country: "Norway", src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" },
	{ country: "Sweden", src: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg" },
	{ country: "Turkey", src: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" },
	{ country: "Greece", src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg" },
	{ country: "Portugal", src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" },
	{ country: "Saudi Arabia", src: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" },
	{ country: "Israel", src: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg" },
	{ country: "United States", src: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
	{ country: "Switzerland", src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg" },
	{ country: "Denmark", src: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg" },
	{ country: "Finland", src: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg" },
	{ country: "Ireland", src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg" },
	{ country: "New Zealand", src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" },
	{ country: "Austria", src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg" },
	{ country: "Belgium", src: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg" },
	{ country: "Poland", src: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg" },
	{ country: "Czech Republic", src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg" },
	{ country: "Hungary", src: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg" },
	{ country: "Thailand", src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg" },
	{ country: "Vietnam", src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" },
	{ country: "Indonesia", src: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg" },
	{ country: "Philippines", src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg" },
	{ country: "Malaysia", src: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg" },
	{ country: "Singapore", src: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg" },
	{ country: "Hong Kong", src: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg" },
	{ country: "Taiwan", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/1599px-Flag_of_the_Republic_of_China.svg.png?20240601025836"},
	{ country: "Chile", src: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg" },
	{ country: "Peru", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg" },
	{ country: "Colombia", src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" },
	{ country: "Venezuela", src: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg" },
	{ country: "Ecuador", src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg" },
	{ country: "Uruguay", src: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg" },
	{ country: "Paraguay", src: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg" },
	{ country: "Bolivia", src: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg" },
	{ country: "Costa Rica", src: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg" },
	{ country: "Panama", src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg" },
	{ country: "Guatemala", src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg" },
	{ country: "Honduras", src: "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg" },
	{ country: "El Salvador", src: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg" },
	{ country: "Nicaragua", src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg" },
	{ country: "Puerto Rico", src: "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg" },
	{ country: "Cuba", src: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg" },
	{ country: "Vanuatu", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/2560px-Flag_of_Vanuatu.svg.png?20150611203121"},
	{ country: "Malawi", src: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg"},
	{ country: "Zimbabwe", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/1600px-Flag_of_Zimbabwe.svg.png?20230803000953"}
];

let currentFlag;
let score = 0;
let round = 0;
const totalRounds = 5;

function getRandomFlag() {
	const randomIndex = Math.floor(Math.random() * flags.length);
	return flags[randomIndex];
}

function setFlag() {
	currentFlag = getRandomFlag();
	document.getElementById("flag").src = currentFlag.src;
}

function startNewRound() {
	score = 0;
	round = 0;
	document.getElementById("score").textContent = '';
	document.getElementById("result").textContent = '';
	document.getElementById("restart-game").style.display = 'none';
	setFlag();
}

document.getElementById("submit-guess").addEventListener("click", function() {
	const userGuess = document.getElementById("guess").value.trim().toLowerCase();
	const correctAnswer = currentFlag.country.toLowerCase();
	const resultDiv = document.getElementById("result");
	const scoreDiv = document.getElementById("score");

	if (userGuess === correctAnswer) {
		score++;
		resultDiv.textContent = "Correct!";
		resultDiv.style.color = "green";
	} else {
		resultDiv.textContent = `Wrong! The correct answer was ${currentFlag.country}.`;
		resultDiv.style.color = "red";
	}

	round++;
	if (round < totalRounds) {
		setFlag();
	} else {
		resultDiv.textContent += " Round over!";
		scoreDiv.textContent = `Your score: ${score} / ${totalRounds}`;
		document.getElementById("restart-game").style.display = 'block';
	}

	document.getElementById("guess").value = "";
});

document.getElementById("restart-game").addEventListener("click", startNewRound);

startNewRound();
