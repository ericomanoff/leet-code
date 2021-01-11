const longestCommonSubsequence = require('./sub-recur')

describe('longestCommonSubsequence ', () => {
  it('works', () => {
    const text1 = "abcde"
    const text2 = "ace"
    const output = 3
    expect(longestCommonSubsequence(text1, text2)).toEqual(output)
  })
  it('works', () => {
    const text1 = "abc"
    const text2 = "abc"
    const output = 3
    expect(longestCommonSubsequence(text1, text2)).toEqual(output)
  })
  it('works', () => {
    const text1 = "abc"
    const text2 = "def"
    const output = 0
    expect(longestCommonSubsequence(text1, text2)).toEqual(output)
  })
})
