document.body.style.backgroundColor = "#ffebcd";

const title = document.createElement("div");
title.className = "boom";
title.textContent = "Японский кроссворд";
document.body.append(title);

let button = document.createElement("button");
button.className = "btn";
button.textContent = "ИГРАТЬ";
document.body.appendChild(button);

let playButton = document.querySelector(".btn");
playButton.addEventListener("click", function () {
  const restart = "РЕСТАРТ!";

  if (button.textContent === "РЕСТАРТ!") {
    location.reload();
  } else {
    button.textContent = "РЕСТАРТ!";
  }

  const outerBoundary = document.createElement("div");
  outerBoundary.className = "outerBoundary";
  document.body.append(outerBoundary);

  const matrix = [
    [ , 1, 1, 5, 1, 1],
    [1, 0, 0, 2, 0, 0],
    [1, 0, 0, 2, 0, 0],
    [5, 2, 2, 2, 2, 2],
    [1, 0, 0, 2, 0, 0],
    [1, 0, 0, 2, 0, 0],
];

  const gameField = document.createElement("div");
  gameField.className = "gameField";
  outerBoundary.appendChild(gameField);

  for (let i = 0; i < 6; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < 6; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = matrix[i][j];
      row.appendChild(cell);
    }
    gameField.appendChild(row);
  }

  let cells = document.querySelectorAll('.cell');
  let totalTwoCells = 0;
  let win = true;
  cells.forEach(cell => {
    cell.addEventListener('click', function() {
    if (this.textContent === '2') {
      this.style.backgroundColor = 'black';
      this.clicked = true;
      totalTwoCells++;
      win = checkWinCondition();
    } else if (this.textContent === '0') {
      this.style.backgroundColor = 'red';
    }
  });
});

function checkWinCondition() {
  if (totalTwoCells === 9) {
    const bannerWin = document.createElement('div');
    bannerWin.className = 'win';
    bannerWin.textContent = 'Отлично! Вы решили нонограмму!';
    outerBoundary.replaceWith(bannerWin);
    return true;
  }

  return false;
}
});
