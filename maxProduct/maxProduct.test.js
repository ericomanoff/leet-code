const maxProduct = require('./maxProduct')
test('it works', () => {
  const given = [3, 4, 5, 2]
  const expected = 12
  expect(maxProduct(given)).toEqual(expected)
})

test('it works', () => {
  const given = [1, 5, 4, 5]
  const expected = 16
  expect(maxProduct(given)).toEqual(expected)
})


test('it works', () => {
  const given = [3, 7]
  const expected = 12
  expect(maxProduct(given)).toEqual(expected)
})