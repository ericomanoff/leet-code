const robber = require('./robber')

let nInput = [1, 2, 3, 1]
let nResult = 4

test('returns the correct answer', () => {
  expect(robber(nInput)).toEqual(nResult)
})

let jInput = [2, 7, 9, 3, 1]
let jResult = 12

test('returns the correct answer', () => {
  expect(robber(jInput)).toEqual(jResult)
})

