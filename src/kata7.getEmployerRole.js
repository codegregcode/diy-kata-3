const getEmployerRole = (employeeName, employees) => {
  return employees.find((obj) => obj.name === employeeName).role;
};

module.exports = getEmployerRole;
