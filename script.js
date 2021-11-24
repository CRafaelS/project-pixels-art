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

let clickColor = document.getElementById('color-palette');

clickColor.addEventListener('click', selectColor)

function selectColor(choose) {
  const check = document.getElementsByClassName('color');
  for (let i = 0; i < check.length; i += 1) {
    if (check[i].classList.contains('selected')) {
      check[i].classList.remove('selected');
    }
  }
  choose.target.classList.add('selected');
}
