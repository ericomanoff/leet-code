const destCity = require('./dest')
describe('destCity', () => {
  it('should work', () => {
    const given = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]
    const want = "Sao Paulo"
    expect(destCity(given)).toEqual(want)
  })

  it('should work', () => {
    const given = [["B", "C"], ["D", "B"], ["C", "A"]]
    const want = "A"
    expect(destCity(given)).toEqual(want)
  })

  it('should work', () => {
    const given = [["A", "Z"]]
    const want = "Z"
    expect(destCity(given)).toEqual(want)
  })

})
