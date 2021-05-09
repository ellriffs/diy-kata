
const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
describe("Human,Cat & Dog years", () => {
    test("returns array of human, cat and dog years", () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    });
});
