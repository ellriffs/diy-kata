const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns string of 'true' when given a boolean of true", () => {
    expect(booleanToWord(true)).toBe('true');
});
it("returns string of 'false' when given a boolean of false", () => {
    expect(booleanToWord(false)).toBe('false');
});
});

  

  // how do we create specs again???
  
