const permute = require('./perm')
describe('permute', () => {

  it('should work', () => {
    const given = [1, 2, 3]
    const want = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

    expect(permute(given)).toEqual(want)
  });
  it('should still work', () => {
    const given = [0, 1]
    const want = [[0, 1], [1, 0]]

    expect(permute(given)).toEqual(want)

  });
  it('should still work', () => {
    const given = [1]
    const want = [[1]]

    expect(permute(given)).toEqual(want)

  });
});