// select all our elements
var htmlGrid = document.querySelector(".grid");
var cells = document.querySelectorAll(".cell");
var playerSelect = document.querySelector(".welcome");
var announceWinner = document.querySelector("#winner-msg");
var scoreboard = document.querySelector(".scoreboard");
var reset = document.querySelector("#reset");

// app variables
var player = null;
var computer = null;
var playerTurn = false;

var myMove = false;
var gridArray = [];


var board = [

  [null, null, null],
  [null, null, null],
  [null, null, null]

];

// choose to play as X or O
playerSelect.addEventListener("click", choosePlayer);

function choosePlayer(e) {
  if (e.target !== e.currentTarget) {

    if (e.target.innerHTML === "X") {
      player = playerChar.innerHTML = "X";
      computer = computerChar.innerHTML = "O";

    }
    if (e.target.innerHTML === "O") {
      player = playerChar.innerHTML = "O";
      computer = computerChar.innerHTML = "X";

    }

  }
}

// listen for clicks on the board
htmlGrid.addEventListener("click", gameInit);

function gameInit(e) {
  if (e.target !== e.currentTarget) {

    e.target.innerHTML = player;

    if (e.target === c00){
      board[0][0] = player;
    }
    if (e.target === c01){
      board[0][1] = player;
    }
    if (e.target === c02){
      board[0][2] = player;
    }
    if (e.target === c10){
      board[1][0] = player;
    }
    if (e.target === c11){
      board[1][1] = player;
    }
    if (e.target === c12){
      board[1][2] = player;
    }
    if (e.target === c20){
      board[2][0] = player;
    }
    if (e.target === c21){
      board[2][1] = player;
    }
    if (e.target === c22){
      board[2][2] = player;
    }

    declareWinner();

  }
}

// declare the winner
function declareWinner() {

    // horizontal
    if (board[0].includes(null) === false && board[0][0] === board[0][1] && board[0][1] === board[0][2]){
     announceWinner.innerHTML = "<h2>"+ player + " is the winner!" + "</h2>";
    }
    if (board[1].includes(null) === false && board[1][0] === board[1][1] && board[1][1] === board[1][2]){
     announceWinner.innerHTML = "<h2>"+ player + " is the winner!" + "</h2>";
    }
    if (board[2].includes(null) === false && board[2][0] === board[2][1] && board[2][1] === board[2][2]){
     announceWinner.innerHTML = "<h2>"+ player + " is the winner!" + "</h2>";
    }

    // vertical

    // diagonal

}

// reset the game
function restartGame() {

  board = [

    [null, null, null],
    [null, null, null],
    [null, null, null]

  ];

  // loop through all cells and clear moves
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }

  announceWinner.innerHTML = "";

  console.log("game reset");

}

reset.addEventListener("click", restartGame);
