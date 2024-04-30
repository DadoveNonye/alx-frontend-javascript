export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  const studetId = studentList.map((student) => student.id);
  return studetId;
}
