let dupString = 'abcabcbb'
let noDupString = 'abc'
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {

  for (let i = 0; i < s.length; i++) { //this loop will modify the starting index
    for (let j = s.length; j >= 0; j--) { // this loop will modify the length of the substring
      console.log('substr: ', s.substr(i, j))
      if (!stringHasDuplicateChars(s.substr(i, j))) {
        return j
      }
    }
  }

}

const stringHasDuplicateChars = (str) => {
  let chars = {}
  for (let i = 0; i < str.length; i++) {
    if (chars.hasOwnProperty(str.charAt(i))) {
      return true
    }
    chars[str.charAt(i)] = i
    console.log('chars: ', chars)
  }
  return false
}

// const sstring = dupString.substr(0, dupString.length - 1)
// console.log(sstring)

// const result = lengthOfLongestSubstring(noDupString)
// const stringHasDups = stringHasDuplicateChars(noDupString)
// console.log(result)
// console.log(stringHasDups)


const res = lengthOfLongestSubstring(dupString)
const stringHasDups2 = stringHasDuplicateChars(dupString)
console.log(res)
console.log(stringHasDups2)