/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.maxSize = maxSize
  this.stack = []
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.stack.length < this.maxSize) {
    this.stack.push(x)
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.stack.length > 0) {
    return this.stack.pop()
  }
  return -1;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  for (let index = 0; index < this.stack.length && index < k; index++) {
    this.stack[index] = this.stack[index] + val;
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */


module.exports = CustomStack