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
var validMoves;
var playerMovesCopy;
var computerMovesCopy;
var nextMoveIdx;

var board = [

  0, 1, 2,
  3, 4, 5,
  6, 7, 8

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
  if (e.target !== e.currentTarget && gameOn === false) {

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
    if (e.target.innerHTML !== "O" && e.target.innerHTML !== "X") {


      e.target.innerHTML = turn;
      moves++;
      console.log(moves++);

      for (var i = 0; i < board.length; i++) {
        if (cells[i].innerHTML !== "") {
          board[i] = cells[i].innerHTML;
        }
      }

      console.log('Player Moves:', playerMoves(board, player));
      console.log("Valid Moves:", validMoves(board));

      computerRandom();

      // call declareWinner function and determine who wins
      if (moves !== 9 && gameOn === true) {
        if (declareWinner(board, player)) {
          winnerMsg.innerHTML = "<h2>Player wins!</h2>";
          gameOn = false;
        } else if (declareWinner(board, computer)) {
          winnerMsg.innerHTML = "<h2>Computer wins!</h2>";
          gameOn = false;
        }
      } else {
        winnerMsg.innerHTML = "<h2>It's a draw!</h2>";
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

// log indexes of player moves
function playerMoves(board, player) {
  var idx = [];
  var i = -1;
  while ((i = board.indexOf(player, i + 1)) != -1) {
    idx.push(i);
  }
  return idx;
}

// function bestBlock() {
//
//   for (var i = 0; i < validMoves(board).length; i++) {
//
//     nextMoveIdx = validMoves(board)[i];
//
//     playerMovesCopy = playerMoves(board, player).slice();
//     playerMovesCopy.push(nextMoveIdx);
//     // console.log("Player Next Possible", playerMovesCopy);
//
//     for (var j = 0; j < wins.length; j++){
//       console.log("win combo", wins[j]);
//       if (wins[j].every(e => playerMovesCopy.indexOf(e) > -1)){
//         console.log("BEST BLOCKING COMPUTER MOVE", nextMoveIdx);
//         board[nextMoveIdx] = cells[nextMoveIdx].innerHTML = computer;
//       }
//     }
//
//   }
//
// }

// TODO: Randomize computer move if no best move available. This sort of works, need to perfect.
function computerRandom() {

  var len = validMoves(board).length;

  for (var i = 0; i < len; i++) {
    var rand = validMoves(board)[Math.floor(Math.random() * len)];
    board[rand] = cells[rand].innerHTML = computer;
      break;
  }
}

// function to pick winner
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

  moves = 0;

  board = [

    0, 1, 2,
    3, 4, 5,
    6, 7, 8

  ];

  cells.forEach(function(cell) {
    cell.innerHTML = "";
  });

  winnerMsg.innerHTML = "";

  gameOn = false;

}, false);
