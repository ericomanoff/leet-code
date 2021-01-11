const findNumbers = require('./evenNums')
describe('findNumbers', () => {
  it('should return the number of numbers with an even number of digits', () => {
    const given = [1]
    const want = 0
    expect(findNumbers(given)).toEqual(want)
  });
})
