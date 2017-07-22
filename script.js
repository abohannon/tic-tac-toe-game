var grid = document.querySelector('.grid');
var cells = document.querySelectorAll('.cell');
var playerSelect = document.querySelector('.welcome');
var scoreboard = document.querySelector('.scoreboard');

var turn = "X";

var board = [

  '','','',
  '','','',
  '','',''

];


playerSelect.addEventListener('click', choosePlayer, false);

function choosePlayer(e) {
  if (e.target !== e.currentTarget) {

    if (e.target.innerHTML === "X") {
      turn = playerChar.innerHTML = "X";
      computerChar.innerHTML = "O";
    }
    if (e.target.innerHTML === "O") {
      turn = playerChar.innerHTML = "O";
      computerChar.innerHTML = "X";
    }
  }

}

grid.addEventListener('click', updateBoard, false);

function updateBoard(e){
  if (e.target.className == "cell"){

    e.target.innerHTML = turn;

  }
}
