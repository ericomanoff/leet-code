const climbStairs = require('./climbingStairs')

let nInput = 2
let nResult = 2

test('returns the number of unique ways to climb stairs', () => {
  expect(climbStairs(nInput)).toEqual(nResult)
})

let jInput = 3
let jResult = 3

test('returns the number of unique ways to climb stairs', () => {
  expect(climbStairs(jInput)).toEqual(jResult)
})