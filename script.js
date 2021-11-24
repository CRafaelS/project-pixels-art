const pixelBox = document.getElementById('pixel-board');

for (let i = 0; i < 5; i += 1) {
  const line = document.createElement('div');
  pixelBox.appendChild(line);
  for (let j = 0; j < 5; j += 1) {
    const createBox = document.createElement('div');
    pixelBox.appendChild(createBox);
    createBox.className = 'pixel';
  }
}

const clickColor = document.getElementById('color-palette');

function selectColor(choose) {
  const check = document.getElementsByClassName('color');
  for (let i = 0; i < check.length; i += 1) {
    if (check[i].classList.contains('selected')) {
      check[i].classList.remove('selected');
    }
  }
  choose.target.classList.add('selected');
}

clickColor.addEventListener('click', selectColor);

function paint(event) {
  const colorSelect = document.querySelector('.selected');
  const newColor = window.getComputedStyle(colorSelect).backgroundColor;
  const paintSquare = event.target;
  paintSquare.style.backgroundColor = newColor;
}

pixelBox.addEventListener('click', paint);

const blackboard = document.getElementById('clear-board');
function cleanBoard() {
  const squareSize = document.getElementsByClassName('pixel');
  for (let i = 0; i < squareSize.length; i += 1) {
    squareSize[i].style.backgroundColor = 'white';
  }
}
blackboard.addEventListener('click', cleanBoard);
