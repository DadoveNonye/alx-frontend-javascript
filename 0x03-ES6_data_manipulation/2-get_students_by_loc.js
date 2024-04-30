export default function getStudentsByLocation(studentList, city) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  const studentsByLocation = studentList.filter(
    (student) => student.location === city
  );
  return studentsByLocation;
}
