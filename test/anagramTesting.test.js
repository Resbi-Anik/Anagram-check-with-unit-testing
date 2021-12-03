const areAnagram = require("../anagram");

describe("Unit testing for anagram function", () => {
  it("For Given string bleat & table", () => {
    expect(areAnagram("bleat", "table")).toEqual(true);
  });
  it("For Given string eat & tar", () => {
    expect(areAnagram("eat", "tar")).toEqual(true);
  });
});
