const judgeCircle = require('./robot')

describe('robot', () => {
  it('works', () => {
    given = "UD"
    want = true
    expect(judgeCircle(given)).toEqual(want)
  })
  it('works', () => {
    given = "LL"
    want = false
    expect(judgeCircle(given)).toEqual(want)
  })
  it('works', () => {
    given = "RRDD"
    want = false
    expect(judgeCircle(given)).toEqual(want)
  })
  it('works', () => {
    given = "LDRRLRUULR"
    want = false
    expect(judgeCircle(given)).toEqual(want)
  })
})
