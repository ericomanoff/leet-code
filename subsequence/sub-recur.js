/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
  if (text1.length == 0 || text2.length == 0) {
    return 0
  }


  text1LastChar = text1.endsWith()
  text2LastChar = text2.endsWith()

  text1MinusLastChar = text1.substr(0, text1.length - 1)
  text2MinusLastChar = text2.substr(0, text2.length - 1)

  if (text1LastChar === text2LastChar) {
    return 1 + longestCommonSubsequence(text1MinusLastChar, text2MinusLastChar)
  } else {
    return Math.max(longestCommonSubsequence(text1, text2MinusLastChar), longestCommonSubsequence(text1MinusLastChar, text2))
  }
};



module.exports = longestCommonSubsequence