const twoSum = require('./twosum')

let nums = [2, 7, 11, 15]
let target = 9
let result = [0, 1]

test('returns indices of the of two numbers that sum to a target', () => {
  expect(twoSum(nums, target)).toEqual(result)
})