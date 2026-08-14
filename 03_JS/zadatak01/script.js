document.getElementById('generateBtn').addEventListener('click', startProcess);

function startProcess() {
  const rInput = document.getElementById('rows');
  const cInput = document.getElementById('cols');
  
  let R = parseInt(rInput.value);
  let C = parseInt(cInput.value);

  if (isNaN(R) || R < 2 || R > 50 || isNaN(C) || C < 2 || C > 50) {
    alert("Molimo unesite broj redaka i stupaca u rasponu od 2 do 50!");
    return;
  }

  const option = parseInt(document.getElementById('pattern').value);


  const matrix = createMatrix(R, C, option);
  renderMatrix(matrix, R, C);

  
  setTimeout(() => {
    let again = confirm("Matrica je uspješno generirana! Želite li napraviti još jednu?");
    if (!again) {
      alert("Hvala na korištenju programa!");
    }
  }, 100);
}


function createMatrix(R, C, option) {
  
  let mat = Array.from({ length: R }, () => Array(C).fill(0));

  if (option >= 1 && option <= 8) {
    fillOuterToInner(mat, R, C, option);
  } else {
    fillInnerToOuter(mat, R, C, option);
  }

  return mat;
}


function fillOuterToInner(mat, R, C, option) {
  let top = 0, bottom = R - 1, left = 0, right = C - 1;
  let num = 1;
  let total = R * C;

  while (num <= total) {
    let path = [];

    
    switch (option) {
      case 1: 
        for (let j = right; j >= left; j--) path.push([bottom, j]);
        for (let i = bottom - 1; i >= top; i--) path.push([i, left]);
        for (let j = left + 1; j <= right; j++) path.push([top, j]);
        for (let i = top + 1; i <= bottom - 1; i++) path.push([i, right]);
        break;
      case 2: 
        for (let i = bottom; i >= top; i--) path.push([i, left]);
        for (let j = left + 1; j <= right; j++) path.push([top, j]);
        for (let i = top + 1; i <= bottom; i++) path.push([i, right]);
        for (let j = right - 1; j >= left + 1; j--) path.push([bottom, j]);
        break;
      case 3: 
        for (let j = left; j <= right; j++) path.push([top, j]);
        for (let i = top + 1; i <= bottom; i++) path.push([i, right]);
        for (let j = right - 1; j >= left; j--) path.push([bottom, j]);
        for (let i = bottom - 1; i >= top + 1; i--) path.push([i, left]);
        break;
      case 4: 
        for (let i = top; i <= bottom; i++) path.push([i, right]);
        for (let j = right - 1; j >= left; j--) path.push([bottom, j]);
        for (let i = bottom - 1; i >= top; i--) path.push([i, left]);
        for (let j = left + 1; j <= right - 1; j++) path.push([top, j]);
        break;
      case 5: 
        for (let i = bottom; i >= top; i--) path.push([i, right]);
        for (let j = right - 1; j >= left; j--) path.push([top, j]);
        for (let i = top + 1; i <= bottom; i++) path.push([i, left]);
        for (let j = left + 1; j <= right - 1; j++) path.push([bottom, j]);
        break;
      case 6: 
        for (let j = left; j <= right; j++) path.push([bottom, j]);
        for (let i = bottom - 1; i >= top; i--) path.push([i, right]);
        for (let j = right - 1; j >= left; j--) path.push([top, j]);
        for (let i = top + 1; i <= bottom - 1; i++) path.push([i, left]);
        break;
      case 7: 
        for (let i = top; i <= bottom; i++) path.push([i, left]);
        for (let j = left + 1; j <= right; j++) path.push([bottom, j]);
        for (let i = bottom - 1; i >= top; i--) path.push([i, right]);
        for (let j = right - 1; j >= left + 1; j--) path.push([top, j]);
        break;
      case 8: 
        for (let j = right; j >= left; j--) path.push([top, j]);
        for (let i = top + 1; i <= bottom; i++) path.push([i, left]);
        for (let j = left + 1; j <= right; j++) path.push([bottom, j]);
        for (let i = bottom - 1; i >= top + 1; i--) path.push([i, right]);
        break;
    }

    
    for (let pos of path) {
      if (mat[pos[0]][pos[1]] === 0) {
        mat[pos[0]][pos[1]] = num++;
      }
    }

    
    top++; bottom--; left++; right--;
  }
}

// Popunjavanje iznutra prema van (Opcije 9 - 16)
function fillInnerToOuter(mat, R, C, option) {
  // Prvo generiramo baznu matricu izvana prema unutra, pa je invertiramo
  // Invertiranje (N*M + 1 - X) pretvara sredinu u početak (broj 1)
  let baseOption = option - 8; // Preslikavamo opcije 9-16 na odgovarajuće 1-8
  fillOuterToInner(mat, R, C, baseOption);

  let total = R * C;
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      mat[r][c] = total - mat[r][c] + 1;
    }
  }
}


function renderMatrix(mat, R, C) {
  const container = document.getElementById('matrix-container');
  container.innerHTML = '';

  for (let r = 0; r < R; r++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'matrix-row';

    for (let c = 0; c < C; c++) {
      const cellDiv = document.createElement('div');
      cellDiv.className = 'matrix-cell';
      
      let val = mat[r][c];
      cellDiv.textContent = val;

      
      if (val === 1) {
        cellDiv.classList.add('start-cell');
      }

      rowDiv.appendChild(cellDiv);
    }
    container.appendChild(rowDiv);
  }
}