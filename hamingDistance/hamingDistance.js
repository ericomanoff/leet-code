/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  count = 0;
  const diff = x ^ y;
  const binDiff = diff.toString(2)
  for (let i = 0; i < binDiff.length; i++) {
    const char = binDiff[i];
    if (char === '1') count++
  }
  return count;
};


module.exports = hammingDistance