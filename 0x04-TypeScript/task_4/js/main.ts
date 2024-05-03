export const cpp = "Cpp Subjects";
export const java = "Java Subjects";
export const react = "React Subjects";

export const cTeacher = {
  experienceTeachingC: 10,
};

function getRequirements(subject: string): string {
  return `Requirements for ${subject}`;
}

function getAvailableTeacher(subject: string, teacher: any): string {
  return `Available teacher for ${subject}: ${teacher}`;
}

console.log("C++");
console.log(getRequirements(cpp));
console.log(getAvailableTeacher(cpp, cTeacher));

console.log("Java");
console.log(getRequirements(java));
console.log(getAvailableTeacher(java, cTeacher));

console.log("React");
console.log(getRequirements(react));
console.log(getAvailableTeacher(react, cTeacher));
