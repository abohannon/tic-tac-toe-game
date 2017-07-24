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
var availSpots;
var moves = 0;
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
  if (e.target.className == "cell" && gameOn === true) {
    if (e.target.innerHTML !== "O" && e.target.innerHTML !== "X") {


      e.target.innerHTML = turn;
      moves++;
      console.log("Moves:", moves);

      for (var i = 0; i < board.length; i++) {
        if (cells[i].innerHTML !== "") {
          board[i] = cells[i].innerHTML;
        }
      }

      // computerMove();

      console.log("valid moves:", validMoves(board));

      // call declareWinner function and determine who wins
      // TODO: implement draw if moves are 9 with no winner

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




// TODO: TESTING
function trackMoves(){

  var playerMoves = [];

  for (var i = 0; i < board.length; i++) {
    playerMoves.push(board.indexOf(player));

  }

  console.log(playerMoves);
}










// TODO: need to prioritize winning. Right now the computer does not choose the winning move.
function computerMove() {


  // if (validMoves(board).includes(4)) {
  //   setTimeout(function() {
  //     board[4] = cells[4].innerHTML = computer;
  //   }, 1000);
  // }
  // else if ( board[0] === player &&
  //           board[1] === player &&
  //           board[2] === 2) {
  //   setTimeout(function() {board[2] = cells[2].innerHTML = computer;},1000);
  // }
  // else if ( board[1] === player &&
  //           board[2] === player &&
  //           board[0] === 0) {
  //   setTimeout(function() {board[0] = cells[0].innerHTML = computer;},1000);
  // }
  // else if ( board[0] === player &&
  //           board[2] === player &&
  //           board[1] === 1) {
  //   board[1] = cells[1].innerHTML = computer;
  // } // top horizontal
  // else if ( board[3] === player &&
  //           board[4] === player &&
  //           board[5] === 5) {
  //   board[5] = cells[5].innerHTML = computer;
  // }
  // else if ( board[4] === player &&
  //           board[5] === player &&
  //           board[3] === 3) {
  //   board[3] = cells[3].innerHTML = computer;
  // }
  // else if ( board[3] === player &&
  //           board[5] === player &&
  //           board[4] === 4) {
  //   board[4] = cells[4].innerHTML = computer;
  // } // middle horizontal
  // else if ( board[6] === player &&
  //           board[7] === player &&
  //           board[8] === 8) {
  //   board[8] = cells[8].innerHTML = computer;
  // }
  // else if ( board[7] === player &&
  //           board[8] === player &&
  //           board[6] === 6) {
  //   board[6] = cells[6].innerHTML = computer;
  // }
  // else if ( board[6] === player &&
  //           board[8] === player &&
  //           board[7] === 7) {
  //   board[7] = cells[7].innerHTML = computer;
  // } // bottom horizontal
  // else if ( board[0] === player &&
  //           board[3] === player &&
  //           board[6] === 6) {
  //   board[6] = cells[6].innerHTML = computer;
  // }
  // else if ( board[3] === player &&
  //           board[6] === player &&
  //           board[0] === 0) {
  //   board[0] = cells[0].innerHTML = computer;
  // }
  // else if ( board[0] === player &&
  //           board[6] === player &&
  //           board[3] === 3) {
  //   board[3] = cells[3].innerHTML = computer;
  // } // left vertical
  // else if ( board[1] === player &&
  //           board[4] === player &&
  //           board[7] === 7) {
  //   board[7] = cells[7].innerHTML = computer;
  // }
  // else if ( board[4] === player &&
  //           board[7] === player &&
  //           board[1] === 1) {
  //   board[1] = cells[1].innerHTML = computer;
  // }
  // else if ( board[1] === player &&
  //           board[7] === player &&
  //           board[4] === 4) {
  //   board[4] = cells[4].innerHTML = computer;
  // } // middle vertical
  // else if ( board[2] === player &&
  //           board[5] === player &&
  //           board[8] === 8) {
  //   board[8] = cells[8].innerHTML = computer;
  // }
  // else if ( board[5] === player &&
  //           board[8] === player &&
  //           board[2] === 2) {
  //   board[2] = cells[2].innerHTML = computer;
  // }
  // else if ( board[2] === player &&
  //           board[8] === player &&
  //           board[5] === 5) {
  //   board[5] = cells[5].innerHTML = computer;
  // } // right vertical
  // else if ( board[0] === player &&
  //           board[4] === player &&
  //           board[8] === 8) {
  //   board[8] = cells[8].innerHTML = computer;
  // }
  // else if ( board[4] === player &&
  //           board[8] === player &&
  //           board[0] === 0) {
  //   setTimeout(function(){board[0] = cells[0].innerHTML = computer;},1000);
  // }
  // else if ( board[0] === player &&
  //           board[8] === player &&
  //           board[4] === 4) {
  //   setTimeout(function(){board[4] = cells[4].innerHTML = computer;},1000);
  // } // left diagonal
  // else if ( board[2] === player &&
  //           board[4] === player &&
  //           board[6] === 6) {
  //   setTimeout(function(){board[6] = cells[6].innerHTML = computer;},1000);
  // }
  // else if ( board[4] === player &&
  //           board[6] === player &&
  //           board[2] === 2) {
  //   setTimeout(function(){board[2] = cells[2].innerHTML = computer;},1000);
  // }
  // else if ( board[2] === player &&
  //           board[6] === player &&
  //           board[4] === 4) {
  //   setTimeout(function(){board[4] = cells[4].innerHTML = computer;},1000);
  // } // right diagonal
  // else {
  //     computerRandom();
  // }

}

// TODO: Randomize computer move if no best move available. This sort of works, need to perfect.
function computerRandom() {

  for (var i = 0; i < validMoves(board).length; i++) {
    if (board[i] !== "0" && board[i] !== "X") {
      var rand = Math.floor(Math.random() * i);
      board[i] = cells[i].innerHTML = computer;
      break;
    }

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

}, false);
