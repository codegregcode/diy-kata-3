const { TestScheduler } = require("jest");
const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns Yes when passed true", () => {
    expect(booleanToWord(true)).toBe('Yes');
  });
  test("return No when passed false", () => {
    expect(booleanToWord(false)).toBe('No');
  });
});
