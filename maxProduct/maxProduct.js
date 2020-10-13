/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = 0
  for (let i = 1; i < nums.length; i++) {
    for (let j = 2; j < nums.length; j++) {

      console.log('i: ', i)
      console.log('j: ', j)

      let prod = (nums[i] - 1) * (nums[j] - 1)
      if (max < prod) {
        max = prod
      }
    }
  }
  return max
};


module.exports = maxProduct