namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java {
    private teacher: Teacher;

    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }

    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava) {
        return "Available Teacher: " + this.teacher.firstName;
      } else {
        return "No available teacher";
      }
    }
  }
}
