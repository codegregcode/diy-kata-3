const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const names = [{name: 'Bart'}, {name: 'Lisa'}, {name:'Maggie'}];
    expect(joinNames(names)).toBe('Bart, Lisa & Maggie');
    const names2 = [{name: 'Bob'}, {name: 'Linda'}, {name: 'Tina'}, {name: 'Gene'}, {name: 'Louise'}];
    expect(joinNames(names2)).toBe('Bob, Linda, Tina, Gene & Louise');
  });
});