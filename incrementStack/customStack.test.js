const CustomStack = require('./customStack')

describe('customStack', () => {
  const maxSize = 10;
  const x = 1, y = 2;

  it('should push and pop', () => {
    var obj = new CustomStack(maxSize)
    obj.push(x)
    obj.push(y)
    expect(obj.pop()).toEqual(y)
  });

  it('should work', () => {

    const customStack = new CustomStack(3);       // Stack is Empty []
    customStack.push(1);                          // stack becomes [1]
    customStack.push(2);                          // stack becomes [1, 2]
    expect(customStack.pop()).toEqual(2);         // return 2 --> Return top of the stack 2, stack becomes [1]
    customStack.push(2);                          // stack becomes [1, 2]
    customStack.push(3);                          // stack becomes [1, 2, 3]
    customStack.push(4);                          // stack still [1, 2, 3], Don't add another elements as size is 4
    customStack.increment(5, 100);                // stack becomes [101, 102, 103]
    customStack.increment(2, 100);                // stack becomes [201, 202, 103]
    expect(customStack.pop()).toEqual(103);       // return 103 --> Return top of the stack 103, stack becomes [201, 202]
    expect(customStack.pop()).toEqual(202);       // return 202 --> Return top of the stack 102, stack becomes [201]
    expect(customStack.pop()).toEqual(201);       // return 201 --> Return top of the stack 101, stack becomes []
    expect(customStack.pop()).toEqual(-1);
  });
});