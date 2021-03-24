const countMatches = require('./match')

describe('countMatches', () => {
  it('should work with 1 match', () => {

    const items = [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]],
      ruleKey = "color",
      ruleValue = "silver"
    const expected = 1

    expect(countMatches(items, ruleKey, ruleValue)).toEqual(expected)
  });

  it('should work with 2 matches', () => {

    items = [["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]],
      ruleKey = "type",
      ruleValue = "phone"

    const expected = 2

    expect(countMatches(items, ruleKey, ruleValue)).toEqual(expected)
  });

});