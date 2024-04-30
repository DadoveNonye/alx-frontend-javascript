export default function getStudentIdsSum(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  const studentIdsSum = studentList.reduce(
    (accumulator, student) => accumulator + student.id,
    0
  );
  return studentIdsSum;
}
