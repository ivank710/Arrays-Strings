//Write an algorithm such that if an element in an M x N matrix is 0, its entire row and col are set to 0

const zeroMatrix1 = matrix => {
  let rows = new Set();
  let cols = new Set();
  let row = matrix.length;
  let col = matrix[0].length;

  for(let i = 0; i < row; i++) {
    for(let j = 0; j < col; j++) {
      if(matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for(let i = 0; i < row; i++) {
    for(let j = 0; j < col; j++) {
      if(rows.has(i) || cols.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

// const zeroMatrix = matrix => {
//   let firstRow = false, firstCol = false;

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       if (matrix[i][j] === 0) {
//         if (i === 0) firstRow = true;
//         if (j === 0) firstCol = true;

//         matrix[0][j] = 0;
//         matrix[i][0] = 0;
//       }
//     }
//   }
  
//   for (let i = 1; i < matrix.length; i++) {
//     for (let j = 1; j < matrix[0].length; j++) {
//       if (matrix[i][0] === 0 || matrix[0][j] === 0) {
//         matrix[i][j] = 0;
//       }
//     }
//   }
  
//   if (firstRow) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       matrix[0][j] = 0;
//     }
//   }

//   if (firstCol) {
//     for (let i = 0; i < matrix.length; i++) {
//       matrix[i][0] = 0;
//     }
//   }

//   return matrix;
// };

let matrix = [
  [0, 0, 0, 5], 
  [4, 3, 1, 4], 
  [0, 1, 1, 4], 
  [1, 2, 1, 3], 
  [0, 0, 1, 1]
];

console.log(zeroMatrix1(matrix));