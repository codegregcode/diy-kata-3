const { TestScheduler } = require("jest");
const { humanCatDogYears } = require("../src");
describe("humanCatDogYears", () => {
  test("returns human, cat and dog years", () => {
    expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
    expect(humanCatDogYears(1)).toStrictEqual([1, 15, 15]);
    expect(humanCatDogYears(2)).toStrictEqual([2, 24, 24]);
    expect(humanCatDogYears(18)).toStrictEqual([18, 88, 104]);
    expect(humanCatDogYears(22)).toStrictEqual([22, 104, 124]);
  });
});
