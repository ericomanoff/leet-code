const kidsWithCandies = require('./candies.js')

test('should return array with indication of greatest possibility', () => {
  const candies = [2, 3, 5, 1, 3]
  const extraCandies = 3
  const expected = [true, true, true, false, true]

  const res = kidsWithCandies(candies, extraCandies)
  expect(res).toEqual(expected)
})

test('should return array with indication of greatest possibility', () => {
  const candies = [4, 2, 1, 1, 2]
  const extraCandies = 1
  const expected = [true, false, false, false, false]

  const res = kidsWithCandies(candies, extraCandies)
  expect(res).toEqual(expected)
})

test('should return array with indication of greatest possibility', () => {
  const candies = [12, 1, 12]
  const extraCandies = 10
  const expected = [true, false, true]

  const res = kidsWithCandies(candies, extraCandies)
  expect(res).toEqual(expected)
})
