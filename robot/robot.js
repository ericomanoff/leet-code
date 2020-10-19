/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function (moves) {
  lat = 0
  long = 0
  for (let index = 0; index < moves.length; index++) {
    const char = moves[index];
    switch (char) {
      case 'L':
        --lat
        break;
      case 'R':
        ++lat
        break;
      case 'D':
        --long
        break
      case 'U':
        ++long
        break
      default:
        break;
    }
  }
  if (lat == 0 && long == 0) {
    return true
  }
  return false
};


module.exports = judgeCircle