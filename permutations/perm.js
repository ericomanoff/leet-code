/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];

  const helper = function (arr, prefix) {
    if (arr.length === 0) {
      res.push(prefix);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const rem = [...arr.slice(0, i), ...arr.slice(i + 1)];
        helper(rem, [...prefix, arr[i]]);
      }
    }

  }

  helper(nums, [])

  return res
};

module.exports = permute