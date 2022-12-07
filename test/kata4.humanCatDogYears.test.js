const { TestScheduler } = require("jest");
const { humanCatDogYears } = require("../src");
describe("humanCatDogYears", () => {
  test("returns human years", () => {
    expect(humanCatDogYears(10)).toStrictEqual([10]);
  });

  xtest("returns human years and cat years", () => {
    expect(humanCatDogYears(10)).toStrictEqual([10, 56]);
  });

  xtest("returns human, cat and dog years", () => {
    expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
  });
});
