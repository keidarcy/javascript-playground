const { A } = require('./A.js');
const { B } = require('./B.js');

describe('test class A', () => {
  const a = new A('test name');
  test('test method in nested class method 1', () => {
    const result = 2;
    jest.spyOn(B.prototype, 'c').mockReturnValue(result);
    const cName = a.c();
    expect(cName).toBe(result);
  });

  test('test method in nested class method 2', () => {
    const result = 3;
    jest.spyOn(B.prototype, 'c').mockReturnValue(result);
    const cName = a.c();
    expect(cName).toBe(result);
  });
});
