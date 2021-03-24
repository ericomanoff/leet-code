const hammingDistance = require('./hamingDistance');

describe('hamingDistance', () => {
  it('should work', () => {
    let input = [
      { x: 1, y: 4, result: 2 },
      { x: 1, y: 3, result: 1 }
    ];
    for (let i = 0; i < input.length; i++) {
      const { x, y, result } = input[i];
      expect(hammingDistance(x, y)).toEqual(result)
    }
  });
});