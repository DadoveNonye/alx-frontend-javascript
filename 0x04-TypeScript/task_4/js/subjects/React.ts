namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React {
    constructor(public teacher: Teacher) {}

    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
