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

var board = [

  null, null, null,
  null, null, null,
  null, null, null

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
      board[1] = player;
    }
    if (e.target === c01){
      board[2] = player;
    }
    if (e.target === c02){
      board[3] = player;
    }
    if (e.target === c10){
      board[4] = player;
    }
    if (e.target === c11){
      board[5] = player;
    }
    if (e.target === c12){
      board[6] = player;
    }
    if (e.target === c20){
      board[7] = player;
    }
    if (e.target === c21){
      board[8] = player;
    }
    if (e.target === c22){
      board[9] = player;
    }

    declareWinner();

  }
}

// declare the winner
function declareWinner() {

    // horizontal & vertical
    for (var i = 0; i < 9; i++){
      if (board[i] !== null && board[i] === board[i + 1] && board[i + 1] === board[i + 2] || board[i] !== null && board[i] === board[i + 3] && board[i + 3] === board[i + 6]){
         announceWinner.innerHTML = "<h2>"+ player + " is the winner!" + "</h2>";
      }
    }


    // if (board[1] === board[2] && board[2] === board[3] && board[1] === board[3]){
    //  announceWinner.innerHTML = "<h2>"+ player + " is the winner!" + "</h2>";
    // }
    // if (board[4] === board[5] && board[5] === board[6]){
    //  announceWinner.innerHTML = "<h2>"+ player + " is the winner!" + "</h2>";
    // }
    // if (board[7] === board[8] && board[8] === board[9]){
    //  announceWinner.innerHTML = "<h2>"+ player + " is the winner!" + "</h2>";
    // }

    // vertical

    // for (var i = 0; i < 9; i++){
    //   if (board[i] !== null && board[i] === board[i + 3] && board[i + 3] === board[i + 6]){
    //      announceWinner.innerHTML = "<h2>"+ player + " is the winner!" + "</h2>";
    //   }
    // }



    // diagonal

    for (var j = 0; j < 9; j++){
      if (board[j] !== null && board[j] === board[j + 4] && board[j + 4] === board[j + 8]) {
         announceWinner.innerHTML = "<h2>"+ player + " is the winner!" + "</h2>";
      }
    }

}

// reset the game
function restartGame() {

  board = [

    null, null, null,
    null, null, null,
    null, null, null

  ];

  // loop through all cells and clear moves
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }

  announceWinner.innerHTML = "";

  console.log("game reset");

}

reset.addEventListener("click", restartGame);