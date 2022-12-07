const { TestScheduler } = require("jest");
const { humanCatDogYears } = require("../src");
describe("humanCatDogYears", () => {
  test("returns human years", () => {
    expect(humanCatDogYears(10)).toStrictEqual([10]);
  });
});
