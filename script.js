// TODO: Setup AI

var grid = document.querySelector('.grid');
var cells = document.querySelectorAll('.cell');
var playerSelect = document.querySelector('.welcome');
var scoreboard = document.querySelector('.scoreboard');
var reset = document.querySelector('#reset');
var winnerMsg = document.querySelector('#winner-msg');

var turn = "";
var player;
var computer;
var moves = 0;
var gameOn = false;

var board = [

  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]

];

var wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// choose player
playerSelect.addEventListener('click', choosePlayer, false);

function choosePlayer(e) {
  if (e.target !== e.currentTarget) {

    gameOn = true;

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
  if (e.target.className === "cell" && gameOn === true) {
    if (e.target.innerHTML !== player && e.target.innerHTML !== computer) {

      e.target.innerHTML = turn;
      moves++;
      console.log("Move:", moves);



      for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++){
          console.log(board[i][j]);
        }

      }

    }

  }
}

// return list of empty board spots
function validMoves(board) {
  return board.filter(function(spot) {
    return spot != "O" && spot != "X";
  });
}


// TODO: Randomize computer move if no best move available. This sort of works, need to perfect.
function randomMove() {

}

// function to pick winner
function declareWinner() {
}


// reset game
reset.addEventListener('click', function() {

  console.clear();

  moves = 0;

  board = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]

  ];

  cells.forEach(function(cell) {
    cell.innerHTML = "";
  });

  winnerMsg.innerHTML = "";

}, false);
