/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0
  nums.forEach(num => {
    if (hasEven(num)) {
      count++
    }
  })
  return count
};


const hasEven = (num) => {
  const numStr = num + "";
  const strLen = numStr.length
  if (strLen % 2 === 0) {
    return true
  }
  return false
}

module.exports = findNumbers