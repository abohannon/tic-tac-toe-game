var htmlGrid = document.querySelector("#grid");
var rows = document.querySelectorAll("tr");
var cells = document.querySelectorAll("td");
var reset = document.querySelector("#reset");

var myMove = false;
var gridArray = [];

var board = [

  [null, null, null],
  [null, null, null],
  [null, null, null]

];

// turn the table cells into an array
for (var i = 0; i < rows.length; i++){
  console.log(rows[i]);
  gridArray.push(rows[i].querySelectorAll("td"));
}

// listen for clicks on the board
htmlGrid.addEventListener("click", gameInit);

function gameInit(e){
  if (e.target !== e.currentTarget){

    if (e.target === c00) {
      board[0][0] = 1;
      e.target.innerHTML = "X";
    }





  }
}



// reset the game
function restartGame() {

  board = [

    [null, null, null],
    [null, null, null],
    [null, null, null]

  ];

  // loop through all cells and clear moves
  for (var i = 0; i < cells.length; i++){
    cells[i].innerHTML = "";
  }

  console.log("game reset");

}

reset.addEventListener("click", restartGame);
