const { A } = require('./A.js');
const { B } = require('./B.js');

const result = 2;
// https://stackoverflow.com/questions/47093028/how-to-mock-the-instance-function-of-another-class-using-jest
jest.mock('./B.js', () => {
  const mBInstance = { c: jest.fn(() => result) };
  const mB = jest.fn(() => mBInstance);
  return { B: mB };
});

describe('test class A', () => {
  const a = new A('test name');
  test('test method a spyOn', () => {
    jest.spyOn(a.b, 'c').mockReturnValue(result);
    const cName = a.c();
    expect(cName).toBe(result);
  });

  test('test method a jest.fn', () => {
    a.b.c = jest.fn().mockReturnValue(result);

    const cName = a.c();
    expect(cName).toBe(result);
  });

  test('test method a mock class', () => {
    const cName = a.c();
    expect(cName).toBe(result);
  });
});
