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
var gameOn = false;

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

      syncBoard();

      declareWinner();

    }

  }
}


// sync board array with input placed inside DOM cells
function syncBoard() {
  for (var i = 0; i < board.length; i++) {
    if (cells[i].innerHTML !== "") {
      board[i] = cells[i].innerHTML;
    }
  }
}

// return list of empty board spots
function emptyIndexies() {
  return board.filter(function(spot) {
    return spot != "O" && spot != "X";
  });

}


// TODO: Randomize computer move if no best move available. This sort of works, need to perfect.
function randomMove() {

}

// function to pick winner
function declareWinner() {
  if (winning(board, player)) {
    console.log("Player wins");
  }
}

// winning combinations using the board indexies
function winning(board, move){
 if (
 (board[0] == move && board[1] == move && board[2] == move) ||
 (board[3] == move && board[4] == move && board[5] == move) ||
 (board[6] == move && board[7] == move && board[8] == move) ||
 (board[0] == move && board[3] == move && board[6] == move) ||
 (board[1] == move && board[4] == move && board[7] == move) ||
 (board[2] == move && board[5] == move && board[8] == move) ||
 (board[0] == move && board[4] == move && board[8] == move) ||
 (board[2] == move && board[4] == move && board[6] == move)
 ) {
 return true;
 } else {
 return false;
 }
}

// the main minimax function
function minimax(newBoard, player){

  //available spots
  var availSpots = emptyIndexies(newBoard);

  // checks for the terminal states such as win, lose, and tie
  //and returning a value accordingly
  if (winning(newBoard, player)){
     return {score:-10};
  }
	else if (winning(newBoard, computer)){
    return {score:10};
	}
  else if (availSpots.length === 0){
  	return {score:0};
  }

  // an array to collect all the objects
  var moves = [];

  // loop through available spots
  for (var i = 0; i < availSpots.length; i++){
    //create an object for each and store the index of that spot
    var move = {};
  	move.index = newBoard[availSpots[i]];

    // set the empty spot to the current player
    newBoard[availSpots[i]] = player;

    /*collect the score resulted from calling minimax
      on the opponent of the current player*/
    if (player == computer){
      var result = minimax(newBoard, player);
      move.score = result.score;
    }
    else{
      var result = minimax(newBoard, computer);
      move.score = result.score;
    }

    // reset the spot to empty
    newBoard[availSpots[i]] = move.index;

    // push the object to the array
    moves.push(move);
  }

  // if it is the computer's turn loop over the moves and choose the move with the highest score
  var bestMove;
  if(player === computer){
    var bestScore = -10000;
    for(var i = 0; i < moves.length; i++){
      if(moves[i].score > bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }else{

// else loop over the moves and choose the move with the lowest score
    var bestScore = 10000;
    for(var i = 0; i < moves.length; i++){
      if(moves[i].score < bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

// return the chosen move (object) from the moves array
  return moves[bestMove];
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

}, false);
