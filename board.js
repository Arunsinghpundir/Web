let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const statusDisplay = document.getElementById("status"); // reference of h2 element

const winMsg = function () {
  return currentPlayer + "won"; // X won
};
const drawMsg = function () {
  return "Draw";
};

const playerTurn = function () {
  return "its" + currentPlayer + "turn"; // its X turn
};

document.querySelectorAll(".cell").forEach(function (cell) {
  cell.addEventListener("click", cellClick);
});

document.querySelector("restart").addEventListener("click", RestartGame);

function cellClick(clickEvent) {
  const clickCell = clickEvent.target;
  const clickIndexVal = parseInt(clickCell.getAttribute("data-cell-index"));
  console.log(clickIndexVal);
  if (gameState[clickIndexVal] !== "" || !gameActive) {
    return;
  }
}

function cellPlayed(clickCell, clickIndexVal) {}
