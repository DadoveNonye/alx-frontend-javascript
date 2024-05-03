namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
    firstName: string;
  }
}

class Cpp implements Subjects.Subject {
  constructor(public teacher: Subjects.Teacher) {}

  getRequirements(): string {
    return "Here is the list of requirements for Cpp";
  }

  getAvailableTeacher(): string {
    if (this.teacher.experienceTeachingC) {
      return `Available Teacher: ${this.teacher.firstName}`;
    } else {
      return "No available teacher";
    }
  }
}
