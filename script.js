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
var turn = "";
var moves = 0;
var gameSession = false;

var boardArray = [

  "", "", "",
  "", "", "",
  "", "", ""

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

  turn = player; // makes player first turn

}


// listen for clicks on the board
htmlGrid.addEventListener("click", gameBoard);

function gameBoard(e) {
  if (e.target.className === "cell") { // prevent clicks on other html elements
    if (e.target.innerHTML === "") { // only allow one move per box

      e.target.innerHTML = turn;

      // change game state and start counting moves
      if (e.target.innerHTML !== "") {
        gameSession = true;
        moves++;
        console.log("Move: " + moves);
      }
      // update boardArray with moves
      for (var i = 0; i < boardArray.length; i++) {
        boardArray[i] = cells[i].innerHTML;
      }

      computerMoves();
      switchPlayer();
      declareWinner();

    }
  }

}

function computerMoves(){


}







// alternate players every turn
function switchPlayer() {

  if (turn === player) {
    turn = computer;
  } else if (turn === computer) {
    turn = player;
  }

}



// declare the winner
// TODO: the announcements are inverted due to the computer AI - still need to figure that out.
function declareWinner() {

  if (moves !== 9) {

    // horizontal
    if ((boardArray[0] !== "" && boardArray[0] === boardArray[1] && boardArray[1] === boardArray[2]) ||
      (boardArray[3] !== "" && boardArray[3] === boardArray[4] && boardArray[4] === boardArray[5]) ||
      (boardArray[6] !== "" && boardArray[6] === boardArray[7] && boardArray[7] === boardArray[8])) {
      if (turn === "O") {
        announceWinner.innerHTML = "<h2>O is the winner!<h2>";
      } else {
        announceWinner.innerHTML = "<h2>X is the winner!<h2>";
      }
    }

    // vertical
    if ((boardArray[0] !== "" && boardArray[0] === boardArray[3] && boardArray[3] === boardArray[6]) ||
      (boardArray[1] !== "" && boardArray[1] === boardArray[4] && boardArray[4] === boardArray[7]) ||
      (boardArray[2] !== "" && boardArray[2] === boardArray[5] && boardArray[5] === boardArray[8])) {
      if (turn === "O") {
        announceWinner.innerHTML = "<h2>O is the winner!<h2>";
      } else {
        announceWinner.innerHTML = "<h2>X is the winner!<h2>";
      }
    }

    // diagonal
    if ((boardArray[0] !== "" && boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8]) ||
      (boardArray[2] !== "" && boardArray[2] === boardArray[4] && boardArray[4] === boardArray[6])) {
      if (turn === "O") {
        announceWinner.innerHTML = "<h2>O is the winner!<h2>";
      } else {
        announceWinner.innerHTML = "<h2>X is the winner!<h2>";
      }
    }

  } else {
    announceWinner.innerHTML = "<h2>It's a draw.<h2>";
  }

}


// reset the game
reset.addEventListener("click", resetGame);

function resetGame() {

  // clear the board array and the cells on the html grid
  for (var i = 0; i < boardArray.length; i++) {
    boardArray[i] = cells[i].innerHTML = "";
  }

  turn = player; // make player the first move after reset
  gameSession = false;
  moves = 0;

  announceWinner.innerHTML = "";

  console.log("game reset");

}
