const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
    expect(reachDestination(50, 95)).toBe("I should be there in 0.5 hours.");
    expect(reachDestination(20, 1.5)).toBe("I should be there in 13.5 hours.");
  });
});
