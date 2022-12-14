const pixelBox = document.getElementById('pixel-board');
const generateboard = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');

for (let i = 0; i < 5; i += 1) {
  const line = document.createElement('div');
  pixelBox.appendChild(line);
  for (let j = 0; j < 5; j += 1) {
    const createBox = document.createElement('div');
    pixelBox.appendChild(createBox);
    createBox.className = 'pixel';
  }
}

// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild

function newBoard() {
  while (pixelBox.firstChild) {
    pixelBox.removeChild(pixelBox.firstChild);
  }
  let number = boardSize.value;
  if (number === '') {
    alert('Board inválido!');
  } else if (number <= 5) {
    number = 5;
    for (let i = 0; i < number; i += 1) {
      console.log(number);
      const line = document.createElement('div');
      pixelBox.appendChild(line);
      for (let j = 0; j < number; j += 1) {
        const createBox = document.createElement('div');
        pixelBox.appendChild(createBox);
        createBox.className = 'pixel';
      }
    }
  } else if (number >= 50) {
    number = 50;
    for (let i = 0; i < number; i += 1) {
      console.log(number);
      const line = document.createElement('div');
      pixelBox.appendChild(line);
      for (let j = 0; j < number; j += 1) {
        const createBox = document.createElement('div');
        pixelBox.appendChild(createBox);
        createBox.className = 'pixel';
      }
    }
  } else {
    for (let i = 0; i < number; i += 1) {
      console.log(number);
      const line = document.createElement('div');
      pixelBox.appendChild(line);
      for (let j = 0; j < number; j += 1) {
        const createBox = document.createElement('div');
        pixelBox.appendChild(createBox);
        createBox.className = 'pixel';
      }
    }
  }
}

generateboard.addEventListener('click', newBoard);

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

// https://stackoverflow.com/questions/14323082/why-doesnt-backgroundcolor-rgba-b-c-work

function generateColor() {
  const red = document.querySelector('.red');
  const blue = document.querySelector('.blue');
  const green = document.querySelector('.green');

  red.style.backgroundColor = 'rgb('+(Math.random() * 255)+', '+(Math.random() * 255)+', '+(Math.random() * 255)+')';
  blue.style.backgroundColor = 'rgb('+(Math.random() * 255)+', '+(Math.random() * 255)+', '+(Math.random() * 255)+')';
  green.style.backgroundColor = 'rgb('+(Math.random() * 255)+', '+(Math.random() * 255)+', '+(Math.random() * 255)+')';
}
window.onload = generateColor;
