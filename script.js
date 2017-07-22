// TODO: Setup AI
// TODO: Reset board on win

var grid = document.querySelector('.grid');
var cells = document.querySelectorAll('.cell');
var playerSelect = document.querySelector('.welcome');
var scoreboard = document.querySelector('.scoreboard');
var reset = document.querySelector('#reset');
var winnerMsg = document.querySelector('#winner-msg');

var turn = "";
var player;
var computer;
var availSpots;

var board = [

  0, 1, 2,
  3, 4, 5,
  6, 7, 8

];

// choose player
playerSelect.addEventListener('click', choosePlayer, false);

function choosePlayer(e) {
  if (e.target !== e.currentTarget) {

    if (e.target.innerHTML === "X") {
      turn = player = playerChar.innerHTML = "X";
      computer = computerChar.innerHTML = "O";
    }
    if (e.target.innerHTML === "O") {
      turn = player = playerChar.innerHTML = "O";
      computer = computerChar.innerHTML = "X";
    }
  }

}

// game board functionality
grid.addEventListener('click', updateBoard, false);

function updateBoard(e) {
  if (e.target.className == "cell") {
    if (e.target.innerHTML !== "O" && e.target.innerHTML !== "X"){


    e.target.innerHTML = turn;

    for (var i = 0; i < board.length; i++) {
      if (cells[i].innerHTML !== "") {
        board[i] = cells[i].innerHTML;
      }
    }

    if (declareWinner(board, player)) {
      winnerMsg.innerHTML = "<h2>Player wins!</h2>";
    } else if (declareWinner(board, computer)) {
      winnerMsg.innerHTML = "<h2>Computer wins!</h2>";
    }
    }
  }
}

// return list of empty board spots
function emptySpots(board) {
  return board.filter(function(spot) {
    return spot != "O" && spot != "X";
  });
}


// declare winner
function declareWinner(gameBoard, move) {

  if (
    (gameBoard[0] == move && gameBoard[1] == move && gameBoard[2] == move) ||
    (gameBoard[3] == move && gameBoard[4] == move && gameBoard[5] == move) ||
    (gameBoard[6] == move && gameBoard[7] == move && gameBoard[8] == move) ||
    (gameBoard[0] == move && gameBoard[3] == move && gameBoard[6] == move) ||
    (gameBoard[1] == move && gameBoard[4] == move && gameBoard[7] == move) ||
    (gameBoard[2] == move && gameBoard[5] == move && gameBoard[8] == move) ||
    (gameBoard[0] == move && gameBoard[4] == move && gameBoard[8] == move) ||
    (gameBoard[2] == move && gameBoard[4] == move && gameBoard[6] == move)
  ) {
    return true;
  } else {
    return false;
  }

}

// reset game
reset.addEventListener('click', function() {

  console.clear();

  turn = "";

  board = [

    0, 1, 2,
    3, 4, 5,
    6, 7, 8

  ];

  cells.forEach(function(cell) {
    cell.innerHTML = "";
  });

  winnerMsg.innerHTML = "";

}, false);
