const humanCatDogYears = (number) => {
  const catYears = (number - 2) * 4 + 24;
  const dogYears = (number - 2) * 5 + 24;
  return  number === 1 ? [number, 15, 15] : number === 2 ? [number, 24, 24] : [number, catYears, dogYears];

  //   if (number === 1) {
//     return [number, 15, 15];
//   }
//   if (number === 2) {
//     return [number, 24, 24];
//   }
//   return [number, catYears, dogYears];
};

module.exports = humanCatDogYears;