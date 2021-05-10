const { joinNames } = require("../src");

describe("join 5 Names", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    names = [{
        name: "Bart"
      },
      {
        name: "Lisa"
      },
      {
        name: "Maggie"
      },
      {
        name: "Homer"
      },
      {
        name: "Marge"
  }];
    expect(joinNames(names)).toBe("Bart, Lisa, Maggie, Homer & Marge");
  })
});

describe("join 3 Names", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    names = [{
        name: "Bart"
      },
      {
        name: "Lisa"
      },
      {
        name: "Maggie"
      }]
    expect(joinNames(names)).toBe("Bart, Lisa & Maggie")
  })
});

describe("join 4 Names", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    names = [{
        name: "Elliot"
      },
      {
        name: "David.D"
      },
      {
        name: "David.A"
      },
      {
        name: "Hugh"
      
      }]
    expect(joinNames(names)).toBe("Elliot, David.D, David.A & Hugh")
  })
  describe("join 0 Names", () => {
    test("returns string of names, seperated by commas and an ampersand", () => {
      names = [{
          name: "[]"
      }]
      expect(joinNames(names)).toBe("[]")
    })
  });
});
