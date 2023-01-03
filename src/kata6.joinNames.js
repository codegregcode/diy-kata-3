const joinNames = (namesObj) => {
  const list = namesObj.map((object) => object.name);
  const last = list.pop();
  return `${list.join(", ")} & ${last}`;
};

module.exports = joinNames;
