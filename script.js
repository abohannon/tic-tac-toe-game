var board = document.querySelector("#board");

board.addEventListener("click", game, false);

function game(e){
  if (e.target !== e.currentTarget){
    console.log("click");
    e.target.innerHTML = "X";


  }
}
