class Teacher {
  private _firstName: string;
  private _lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly location: string;
  readonly yearsOfExperience?: number;
  [key: string]: any;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    this.yearsOfExperience = yearsOfExperience;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }
}

interface Directors extends Teacher {
  numberOfReports: number;
}
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
