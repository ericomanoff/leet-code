const { oddCells, incCol, incRow } = require('./matrix')

describe('oddCells', () => {
  it('should exist', () => {
    expect(typeof oddCells).toEqual('function')
  })

  it('should work with test cases', () => {
    let n = 2, m = 3, indices = [[0, 1], [1, 1]]
    expect(oddCells(n, m, indices)).toEqual(6)
  });

  it('should work with test cases', () => {
    let n = 2, m = 2, indices = [[1, 1], [0, 0]]
    expect(oddCells(n, m, indices)).toEqual(0)
  });

});

describe('incCol', () => {
  it('should increment a col in a 2d array', () => {
    let n = 2
    let m = 3

    let arr = []
    for (let i = 0; i < n; i++) {
      arr.push(Array(m).fill(0))
    }
    incCol(arr, 1)
    let want = [[0, 1, 0], [0, 1, 0]]
    expect(arr).toEqual(want)
  });
})

describe('incRow', () => {
  it('should increment a row in a 2d array', () => {
    let n = 2
    let m = 3

    let arr = []
    for (let i = 0; i < n; i++) {
      arr.push(Array(m).fill(0))
    }

    incRow(arr, 1)
    let want = [[0, 0, 0], [1, 1, 1]]
    expect(arr).toEqual(want)
  });
})