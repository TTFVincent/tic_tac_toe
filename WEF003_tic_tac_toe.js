function startGame() {
  let playerTurnValue = 1;
  let score1 = 0;
  let score2 = 0;
  let checkDraw = 0;

  let buttons = document.querySelectorAll(".box");

  for (let button of buttons) {
    button.addEventListener("click", () => {
      if (
        button.innerHTML == '<i class="bi bi-x-lg"></i>' ||
        button.innerHTML == '<i class="bi bi-circle"></i>'
      ) {
      } else if (
        document.getElementById("winner").innerHTML == "player one wins" ||
        document.getElementById("winner").innerHTML == "player two wins"
      ) {
      } else {
        playerTurnValue++;
        console.log(playerTurnValue);

        if (playerTurnValue % 2 == 0) {
          button.innerHTML = '<i class="bi bi-x-lg"></i>';
        } else {
          button.innerHTML = '<i class="bi bi-circle"></i>';
        }
        if (playerTurnValue % 2 == 0) {
          document.getElementById("Turn").innerHTML = "Player 2's Turn";
        } else {
          document.getElementById("Turn").innerHTML = "Player 1's Turn";
        }
        if (playerTurnValue > 1) {
          let playerTurn1 = document.getElementById("b2");
          let playerTurn2 = document.getElementById("b1");
          playerTurn1.classList.toggle("playerTurn");
          playerTurn2.classList.toggle("playerTurn");
          playerTurn1.classList.toggle("notPlayerTurn");
          playerTurn2.classList.toggle("notPlayerTurn");
        }

        if (playerTurnValue % 2 == 0) {
          document.getElementById("showTurnIcon").innerHTML =
            '<i class="bi bi-circle"></i>';
        } else {
          document.getElementById("showTurnIcon").innerHTML =
            '<i class="bi bi-x-lg"></i>';
        }
        if (playerTurnValue == 10) {
          playerTurnValue = 1;
          document.getElementById("winner").innerHTML = "it is a draw";
          document.getElementById("start").style.visibility = "visible";
          document.getElementById("b1").classList.remove("playerTurn");
          document.getElementById("b1").classList.remove("notPlayerTurn");
          document.getElementById("b2").classList.remove("playerTurn");
          document.getElementById("b2").classList.remove("notPlayerTurn");
          document.getElementById("Turn").innerHTML = `Wait For Game`;
          document.getElementById("showTurnIcon").innerHTML = "";
        }
        let X = '<i class="bi bi-x-lg"></i>';
        let O = '<i class="bi bi-circle"></i>';
        if (
          (buttons[0].innerHTML == X &&
            buttons[1].innerHTML == X &&
            buttons[2].innerHTML == X) ||
          (buttons[6].innerHTML == X &&
            buttons[7].innerHTML == X &&
            buttons[8].innerHTML == X) ||
          (buttons[3].innerHTML == X &&
            buttons[4].innerHTML == X &&
            buttons[5].innerHTML == X) ||
          (buttons[0].innerHTML == X &&
            buttons[3].innerHTML == X &&
            buttons[6].innerHTML == X) ||
          (buttons[1].innerHTML == X &&
            buttons[4].innerHTML == X &&
            buttons[7].innerHTML == X) ||
          (buttons[2].innerHTML == X &&
            buttons[5].innerHTML == X &&
            buttons[8].innerHTML == X) ||
          (buttons[2].innerHTML == X &&
            buttons[4].innerHTML == X &&
            buttons[6].innerHTML == X) ||
          (buttons[0].innerHTML == X &&
            buttons[4].innerHTML == X &&
            buttons[8].innerHTML == X)
        ) {
          if (
            document.getElementById("winner").innerHTML == "player one wins" ||
            document.getElementById("winner").innerHTML == "player two wins"
          ) {
          } else {
            score1++;
          }
          playerTurnValue = 1;
          document.getElementById("winner").innerHTML = "player one wins";
          document.getElementById("start").style.visibility = "visible";
          document.getElementById("b1").classList.remove("playerTurn");
          document.getElementById("b1").classList.remove("notPlayerTurn");
          document.getElementById("b2").classList.remove("playerTurn");
          document.getElementById("b2").classList.remove("notPlayerTurn");
          document.getElementById("Turn").innerHTML = `Wait For Game`;
          document.getElementById("showTurnIcon").innerHTML = "";
          document.getElementById("p1score").innerHTML = `${score1}`;
          console.log(score1);

          return true;
        }
        if (
          (buttons[0].innerHTML == O &&
            buttons[1].innerHTML == O &&
            buttons[2].innerHTML == O) ||
          (buttons[6].innerHTML == O &&
            buttons[7].innerHTML == O &&
            buttons[8].innerHTML == O) ||
          (buttons[3].innerHTML == O &&
            buttons[4].innerHTML == O &&
            buttons[5].innerHTML == O) ||
          (buttons[0].innerHTML == O &&
            buttons[3].innerHTML == O &&
            buttons[6].innerHTML == O) ||
          (buttons[1].innerHTML == O &&
            buttons[4].innerHTML == O &&
            buttons[7].innerHTML == O) ||
          (buttons[2].innerHTML == O &&
            buttons[5].innerHTML == O &&
            buttons[8].innerHTML == O) ||
          (buttons[2].innerHTML == O &&
            buttons[4].innerHTML == O &&
            buttons[6].innerHTML == O) ||
          (buttons[0].innerHTML == O &&
            buttons[4].innerHTML == O &&
            buttons[8].innerHTML == O)
        ) {
          if (
            document.getElementById("winner").innerHTML == "player one wins" ||
            document.getElementById("winner").innerHTML == "player two wins"
          ) {
          } else {
            score2++;
          }
          playerTurnValue = 1;
          document.getElementById("winner").innerHTML = "player two wins";
          document.getElementById("start").style.visibility = "visible";
          document.getElementById("b1").classList.remove("playerTurn");
          document.getElementById("b1").classList.remove("notPlayerTurn");
          document.getElementById("b2").classList.remove("playerTurn");
          document.getElementById("b2").classList.remove("notPlayerTurn");
          document.getElementById("p2score").innerHTML = `${score2}`;
          document.getElementById("Turn").innerHTML = `Wait For Game`;
          document.getElementById("showTurnIcon").innerHTML = "";

          return;
        }
      }
    });
  }
}

function playerButtonShadow() {
  let playerTurn1 = document.getElementById("b1");
  playerTurn1.classList.toggle("playerTurn");
  let playerTurn2 = document.getElementById("b2");
  playerTurn2.classList.toggle("notPlayerTurn");
  let start = document.getElementById("start");
  start.style.visibility = "hidden";
  document.getElementById("showTurnIcon").innerHTML =
    '<i class="bi bi-x-lg"></i>';
  document.getElementById("Turn").innerHTML = "Player 1's Turn";

  for (let z = 0; z < 9; z++) {
    document.getElementsByClassName("box")[z].innerHTML = "";
  }
  document.getElementById("winner").innerHTML = "";
}

document.getElementById("start").addEventListener("click", () => {
  console.log("start game");
  playerButtonShadow();
  startGame();
});
