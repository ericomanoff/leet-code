/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let i
  switch (ruleKey) {
    case 'type':
      i = 0;
      break;
    case 'color':
      i = 1;
      break;
    case 'name':
      i = 2;
      break;
    default:
      break;
  }

  return items.filter(el => el[i] === ruleValue).length
};

module.exports = countMatches