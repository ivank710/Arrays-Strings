//Given an image represented by an N x N matrix, where each pixel in the image is represented by an integer
//write a method to rotate the image by 90 degrees. Solve in-place

// Given input matrix =
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ],

// rotate the input matrix in -place such that it becomes:
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const transpose = matrix => {
  for(let i = 0; i < matrix.length; i++) {
    for(let j = i; j < matrix[0].length; j++) {
      let temp;
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  return matrix;
};


const rotateMatrix = matrix => {

  matrix = transpose(matrix);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      let temp = 0;
      temp = matrix[i][j];  //1
      matrix[i][j] = matrix[i][matrix.length - 1 - j];  //2
      matrix[i][matrix.length - 1 - j] = temp;  //
    }
  }

  return matrix;
};

console.log(rotateMatrix(matrix));