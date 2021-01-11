/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (n, m, indices) {
  let numOdd = 0
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(Array(m).fill(0))
  }
  // console.log('arr: ', arr)
  indices.forEach(cord => {
    rowToIncrement = cord[0]
    colToIncrement = cord[1]
    incRow(arr, rowToIncrement)
    incCol(arr, colToIncrement)
  })
  arr.forEach(colArr => {
    colArr.forEach(num => {
      if (num % 2 !== 0) { numOdd++ }
    }
    )
  })

  return numOdd
};

const incRow = function (arr, row) {
  arr[row] = arr[row].map(function (item) {
    return item + 1;
  });
}

//the row array is filled with the same array
const incCol = function (arr, col) {
  arr.forEach((colArr) => {
    colArr[col] = colArr[col] + 1
  });
  return arr
}

module.exports = { oddCells, incRow, incCol }