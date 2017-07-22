var grid = document.querySelector('.grid');
var cells = document.querySelectorAll('.cell');
var playerSelect = document.querySelector('.welcome');
var scoreboard = document.querySelector('.scoreboard');
var reset = document.querySelector('#reset');
var winnerMsg = document.querySelector('#winner-msg');

var turn = "X";
var player;
var computer;

var board = [

  0,1,2,
  3,4,5,
  6,7,8

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

function updateBoard(e){
  if (e.target.className == "cell"){

    e.target.innerHTML = turn;

    for (var i = 0; i < board.length; i++){
      if (cells[i].innerHTML !== ""){
        board[i] = cells[i].innerHTML;
      }
    }

    if (declareWinner(board, player)) {
      console.log("Player wins");
    } else if (declareWinner(board, computer)) {
      console.log("Computer wins");
    }

  }
}

// return list of empty board spots
function emptySpots(board) {
  return board.filter(function(spot) {
    return spot != "O" && spot != "X";
  });
}

// tha main minimax function
// function minimax(newBoard, player) {
//
//   // available spots
//   var availSpots = emptySpots(newBoard);
//
//   if (winning(newBoard, player)){
//     return {score:-10};
//   }
//
//     else if (winning(newBoard, computer)){
//       return {score:10};
//     }
//
//     else if (availSpots.length === 0) {
//       return {score:0};
//     }
//
//     var moves = [];
//
//     for (var i = 0; i < availSpots.length; i++) {
//       var move = {};
//           move.index = newBoard[availSpots[i]];
//
//       newBoard[availSpots[i]] = player;
//
//       if (player == computer) {
//
//       }
//     }
//
// }





// declare winner
function declareWinner(gameBoard, move){

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
reset.addEventListener('click', function(){

  console.clear();

  board = [

    0,1,2,
    3,4,5,
    6,7,8

  ];

  cells.forEach(function(cell){
    cell.innerHTML = "";
  });

  winnerMsg.innerHTML = "";

}, false);
