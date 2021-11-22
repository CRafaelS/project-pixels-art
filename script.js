const pixelBox = document.getElementById('pixel-board');
// para fazer esse desafio eu revi a aula 5.2 parte II
for (let i = 0; i < 5; i += 1) {
  const line = document.createElement('div');
  pixelBox.appendChild(line);
    for (let j = 0; j < 5; j += 1) {
      const createBox = document.createElement('div');
      pixelBox.appendChild(createBox);
      createBox.className = 'pixel';
  }
}
