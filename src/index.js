module.exports = function towelSort (matrix) {
  console.log(matrix);

  if (matrix === undefined) {
    return [];
  }

  let array = [];
  for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {
      let columnIdx = i % 2 === 0 ? j : (matrix[i].length - j - 1);
      
      console.log(matrix[i][columnIdx]);
      array.push(matrix[i][columnIdx]);
    }
  }
  return array;
}
