/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let mostCandies = 0
  let res = []
  for (let index = 0; index < candies.length; index++) {
    const numCandies = candies[index];
    if (numCandies > mostCandies) {
      mostCandies = numCandies
      index = -1
      continue;
    } else if (mostCandies - extraCandies > numCandies) {
      res[index] = false
    } else {
      res[index] = true
    }
  }
  return res
};

module.exports = kidsWithCandies