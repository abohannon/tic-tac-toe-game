// TODO: Setup AI
// TODO: Reset board on win
// TODO: Declare draw

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
    if (e.target.innerHTML !== "O" && e.target.innerHTML !== "X") {


      e.target.innerHTML = turn;

      for (var i = 0; i < board.length; i++) {
        if (cells[i].innerHTML !== "") {
          board[i] = cells[i].innerHTML;
        }
      }

      computerMove();

      console.log("empty spots:", emptySpots(board));

      // call declareWinner function and determine who wins
      // TODO: implement draw if moves are 9 with no winner

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

function computerMove() {

  // if the computer can take the center, take it
  // if (emptySpots(board).includes(4)) {
  //   setTimeout(function() {
  //     board[4] = cells[4].innerHTML = computer;
  //   }, 1000);
  // } else if (emptySpots(board).includes(3) && board[6] === player) {
  //   setTimeout(function() {
  //     board[3] = cells[3].innerHTML = computer;
  //   }, 1000);
  // }

  if (emptySpots(board).includes(4)) {
    setTimeout(function() {
      board[4] = cells[4].innerHTML = computer;
    }, 1000);
  }
  else if ( board[0] === player &&
            board[1] === player &&
            board[2] === 2) {
    setTimeout(function() {board[2] = cells[2].innerHTML = computer;},1000);
  }
  else if ( board[1] === player &&
            board[2] === player &&
            board[0] === 0) {
    setTimeout(function() {board[0] = cells[0].innerHTML = computer;},1000);
  }
  else if ( board[0] === player &&
            board[2] === player &&
            board[1] === 1) {
    board[1] = cells[1].innerHTML = computer;
  } // top horizontal
  else if ( board[3] === player &&
            board[4] === player &&
            board[5] === 5) {
    board[5] = cells[5].innerHTML = computer;
  }
  else if ( board[4] === player &&
            board[5] === player &&
            board[3] === 3) {
    board[3] = cells[3].innerHTML = computer;
  }
  else if ( board[3] === player &&
            board[5] === player &&
            board[4] === 4) {
    board[4] = cells[4].innerHTML = computer;
  } // middle horizontal
  else if ( board[6] === player &&
            board[7] === player &&
            board[8] === 8) {
    board[8] = cells[8].innerHTML = computer;
  }
  else if ( board[7] === player &&
            board[8] === player &&
            board[6] === 6) {
    board[6] = cells[6].innerHTML = computer;
  }
  else if ( board[6] === player &&
            board[8] === player &&
            board[7] === 7) {
    board[7] = cells[7].innerHTML = computer;
  } // bottom horizontal
  else if ( board[0] === player &&
            board[3] === player &&
            board[6] === 6) {
    board[6] = cells[6].innerHTML = computer;
  }
  else if ( board[3] === player &&
            board[6] === player &&
            board[0] === 0) {
    board[0] = cells[0].innerHTML = computer;
  }
  else if ( board[0] === player &&
            board[6] === player &&
            board[3] === 3) {
    board[3] = cells[3].innerHTML = computer;
  } // left vertical
  else if ( board[1] === player &&
            board[4] === player &&
            board[7] === 7) {
    board[7] = cells[7].innerHTML = computer;
  }
  else if ( board[4] === player &&
            board[7] === player &&
            board[1] === 1) {
    board[1] = cells[1].innerHTML = computer;
  }
  else if ( board[1] === player &&
            board[7] === player &&
            board[4] === 4) {
    board[4] = cells[4].innerHTML = computer;
  } // middle vertical
  else if ( board[2] === player &&
            board[5] === player &&
            board[8] === 8) {
    board[8] = cells[8].innerHTML = computer;
  }
  else if ( board[5] === player &&
            board[8] === player &&
            board[2] === 2) {
    board[2] = cells[2].innerHTML = computer;
  }
  else if ( board[2] === player &&
            board[8] === player &&
            board[5] === 5) {
    board[5] = cells[5].innerHTML = computer;
  } // right vertical
  else if ( board[0] === player &&
            board[4] === player &&
            board[8] === 8) {
    board[8] = cells[8].innerHTML = computer;
  }
  else if ( board[4] === player &&
            board[8] === player &&
            board[0] === 0) {
    setTimeout(function(){board[0] = cells[0].innerHTML = computer;},1000);
  }
  else if ( board[0] === player &&
            board[8] === player &&
            board[4] === 4) {
    setTimeout(function(){board[4] = cells[4].innerHTML = computer;},1000);
  } // left diagonal
  else if ( board[2] === player &&
            board[4] === player &&
            board[6] === 6) {
    setTimeout(function(){board[6] = cells[6].innerHTML = computer;},1000);
  }
  else if ( board[4] === player &&
            board[6] === player &&
            board[2] === 2) {
    setTimeout(function(){board[2] = cells[2].innerHTML = computer;},1000);
  }
  else if ( board[2] === player &&
            board[6] === player &&
            board[4] === 4) {
    setTimeout(function(){board[4] = cells[4].innerHTML = computer;},1000);
  } // right diagonal
  else {
      computerRandom();
  }

}

// TODO: this sort of works, need to perfect.
function computerRandom(){

  for (var i = 0; i < emptySpots(board).length; i++){
    var rand = Math.floor(Math.random() * i);
    board[i] = cells[i].innerHTML = computer;
    console.log(emptySpots(board)[rand]);
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

  turn = "";

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
