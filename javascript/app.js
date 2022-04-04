const score = document.getElementById("score");

const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissor");
const btnRock = document.getElementById("btn-rock");

const main = document.getElementById("main");
const picked = document.getElementById("picked");
const btnRules = document.getElementById("btn-rules");
const cardRules = document.getElementById("card-rules");
const cardRules__ = document.getElementById("card-rules__");

const btnPlayer = document.getElementById("btn-player");
const playerIcon = document.getElementById("player-icon");
const btnHouse = document.getElementById("btn-house");
const houseIcon = document.getElementById("house-icon");

const winnerBlock = document.getElementById("winnerBlock");
const winner = document.getElementById("winner");
const btnReset = document.getElementById("btn-reset");

let numberScore = 0;
let propsNumber = 0;
let randomNumero = 0;

const array = [
  {
    figure: "paper",
    icon: "images/icon-paper.svg",
    border: "border-primary",
  },
  {
    figure: "scissors",
    icon: "images/icon-scissors.svg",
    border: "border-warning",
  },
  {
    figure: "rock",
    icon: "images/icon-rock.svg",
    border: "border-danger",
  },
];

document.addEventListener("click", (e) => {
  closeCardRules(e);
});

btnPaper.addEventListener("click", (e) => {
  Game(0);
});

btnScissors.addEventListener("click", (e) => {
  Game(1);
});

btnRock.addEventListener("click", (e) => {
  Game(2);
});

const Game = (props) => {
  styleGame(props);
  switch (props) {
    case 0:
      Paper();
      break;
    case 1:
      Scissors();
      break;
    case 2:
      Rock();
      break;
  }
};

btnReset.addEventListener("click", () => {
  btnPlayer.classList.remove(array[propsNumber].border);
  // playerIcon.classList.remove(array[propsNumber].icon);

  btnHouse.classList.remove(array[randomNumero].border);
  // houseIcon.classList.remove(array[randomNumero].icon);

  main.classList.remove("d-none");
  picked.classList.add("d-none");
});

const randomNumber = () => {
  return Math.floor(Math.random() * 3);
};

const Paper = () => {
  if (randomNumero == 1) {
    numberScore--;
    score.innerHTML = `${numberScore}`;
    winner.innerHTML = "YOU LOSE";
  } else if (randomNumero === 0) {
    winner.innerHTML = "DRAW";
  } else {
    numberScore++;
    score.innerHTML = `${numberScore}`;
    winner.innerHTML = "YOU WIN";
  }
};

const Scissors = () => {
  if (randomNumero == 2) {
    numberScore--;
    score.innerHTML = `${numberScore}`;
    winner.innerHTML = "YOU LOSE";
  } else if (randomNumero === 1) {
    winner.innerHTML = "DRAW";
  } else {
    numberScore++;
    score.innerHTML = `${numberScore}`;
    winner.innerHTML = "YOU WIN";
  }
};

const Rock = () => {
  if (randomNumero == 0) {
    numberScore--;
    score.innerHTML = `${numberScore}`;
    winner.innerHTML = "YOU LOSE";
  } else if (randomNumero === 2) {
    winner.innerHTML = "DRAW";
  } else {
    numberScore++;
    score.innerHTML = `${numberScore}`;
    winner.innerHTML = "YOU WIN";
  }
};

const styleGame = (props) => {
  main.classList.add("d-none");
  picked.classList.remove("d-none");

  btnPlayer.classList.add(array[props].border);
  playerIcon.src = array[props].icon;

  propsNumber = props;
  randomNumero = randomNumber();

  btnHouse.classList.add(array[randomNumero].border);
  houseIcon.src = array[randomNumero].icon;
};

const closeCardRules = (e) => {
  if (
    e.target.id === "btn-rules" ||
    e.target.id === "btn-close" ||
    e.target.id === "btn-close__"
  ) {
    cardRules.classList.toggle("d-none");
    cardRules__.classList.toggle("d-none");
  }
};

window.addEventListener("resize", (e) => {
  if (window.innerWidth < "576") {
    winnerBlock.classList.remove("top-50");
    winnerBlock.classList.add("top-100");
  } else {
    winnerBlock.classList.remove("top-100");
    winnerBlock.classList.add("top-50");
  }
});

window.addEventListener("load", (e) => {
  if (window.innerWidth < "576") {
    winnerBlock.classList.remove("top-50");
    winnerBlock.classList.add("top-100");
  } else {
    winnerBlock.classList.remove("top-100");
    winnerBlock.classList.add("top-50");
  }
});
