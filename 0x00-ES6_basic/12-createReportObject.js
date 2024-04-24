export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (let department in employeesList) {
    allEmployees[department] = [...employeesList[department]];
  }

  const getNumberOfDepartments = () => Object.keys(employeesList).length;

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
