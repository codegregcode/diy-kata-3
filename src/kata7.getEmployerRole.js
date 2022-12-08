const getEmployerRole = (employeeName, employees) => {
  const search = employees.find((obj) => obj.name === employeeName);
  return search.role;
};

module.exports = getEmployerRole;
