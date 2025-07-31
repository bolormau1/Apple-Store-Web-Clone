// if (value == "?") {
//   if(sign == "o") {
//     value = sign;
//   } else value = sign;
// }
// else msg = "Already taken.";

// let pos;

function tap11() {
  let pos = 11;
  ticTacToe2(pos);
}

function ticTacToe2(pos) {
  let o = "o";
  let x = "x";
  let turn = 2;
  let sign;
  let value;
  let msg;

  let s11 = "?";

  function checker() {
    if (
      ((s11 && s12 && s13) ||
        (s21 && s22 && s23) ||
        (s31 && s32 && s33) ||
        (s11 && s21 && s31) ||
        (s12 && s22 && s32) ||
        (s13 && s23 && s33) ||
        (s11 && s22 && s33) ||
        (s13 && s22 && s31)) === "o"
    ) {
      document.getElementById("msg").innerText = "O wins!";
    } else if (
      ((s11 && s12 && s13) ||
        (s21 && s22 && s23) ||
        (s31 && s32 && s33) ||
        (s11 && s21 && s31) ||
        (s12 && s22 && s32) ||
        (s13 && s23 && s33) ||
        (s11 && s22 && s33) ||
        (s13 && s22 && s31)) === "x"
    ) {
      document.getElementById("msg").innerText = "X wins!";
    }
  }

  function fx() {
    sign = "x";

    if (pos === 11) {
      if (s11 == "?") {
        s11 = sign;
        document.getElementById("s11").innerText = sign;
        turn++;
      } else
        document.getElementById("msg").innerText =
          "Already filled! Try another position.";
    }
    checker();
  }

  function fo() {
    sign = "o";

    turn++;
  }

  if (turn % 2 === 0 && turn < 5) {
    fx();
  } else if (turn % 2 === 0 && turn < 5) {
    fo();
  } else msg = "Game over!";
}
