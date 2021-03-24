/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {

  const aMoves = moves.filter((val, index) => {
    if (index % 2 === 0) {
      return val
    }
  })

  if (checkWinner(aMoves)) {
    return 'A'
  }

  const bMoves = moves.filter((val, index) => {
    if (index % 2 !== 0) {
      return val
    }
  })

  if (checkWinner(bMoves)) {
    return 'B'
  }

  if (moves.length >= 9) {
    return "Draw"
  }

  return "Pending"
};


const checkWinner = (moves) => {

  let winner = false;
  if (moves.length < 3) {
    return winner
  }

  let sumMap = { row0: 0, row1: 0, row2: 0, col0: 0, col1: 0, col2: 0 }

  moves.forEach(cord => {
    sumMap[`row${cord[0]}`] = sumMap[`row${cord[0]}`] + 1
    sumMap[`col${cord[1]}`] = sumMap[`col${cord[1]}`] + 1
    for (const property in sumMap) {
      if (sumMap[property] === 3) {
        winner = true;
      }
    }
  });

  //todo: i think the sum values won't work since you can't
  //gaurantee you're only evaluating the winning cords
  // maybe just check each cord via a map or something

  let count = moves.reduce((acc, cord) => {
    return acc + cord[0] + cord[1]
  }, 0)

  if (count === 6) {
    winner = true;
  }

  return winner;
}

module.exports = tictactoe