namespace Subjects {
  interface Teacher {}

  export class Subject {
    private teacher: Teacher;

    public setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
