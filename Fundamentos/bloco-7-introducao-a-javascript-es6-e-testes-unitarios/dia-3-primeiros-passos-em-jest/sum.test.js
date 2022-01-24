const sum = require('./sum');

describe('function sum', () => {
  it('returns 9 from sum of 4 + 5', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('returns 0 from sum of 0 + 0', () => {
    expect(sum(0, 0)).toBe(0);
  })

  it('throw a error when sum 4 + "5"', () => {
    expect(
      () => {
        sum(4, "5")
      }
    ).toThrow();
  });

  it('throw a error.message of "parameters must be numbers" when sum 4 + "5"', () => {
    expect(
      () => {
        sum(4, "5")
      }
    ).toThrow('parameters must be numbers');
  });
})