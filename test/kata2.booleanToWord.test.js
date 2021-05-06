const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns 'yes' when given a boolean of true", () => {
    expect(booleanToWord(true)).toBe('yes');
});
it("returns 'no' false' when given a boolean of false", () => {
    expect(booleanToWord(false)).toBe('no');
});
});

  

  // how do we create specs again???
  
