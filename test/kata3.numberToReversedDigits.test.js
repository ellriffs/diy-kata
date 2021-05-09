const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(6789)).toEqual([9, 8, 7, 6]);
    expect(numberToReversedDigits(987654321)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  });
});