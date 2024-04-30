export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const studetId = students.map((student) => student.id);
  return studetId;
}
