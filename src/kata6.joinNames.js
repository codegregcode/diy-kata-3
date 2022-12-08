const joinNames = (namesObj) => {
  const list = namesObj.map((object) => object.name);
  const last = list.pop();
  return `${list.join(", ")} & ${last}`;
  //   const list = namesObj.reduce((acc, curr, index) => {
//     if (index < namesObj.length - 1) {
//       return `${acc}, ${curr.name}`;
//     } 
//     return `${acc} & ${curr.name}`;
//   }, namesObj[0].name);
//   return list;
};

module.exports = joinNames;
