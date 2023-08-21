export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [prop: string]: any;
}

export interface Director extends Teacher{
    numberOfReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

export interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

export interface StudentConstructor {
    new(firstName: string, lastName: string): Student;
  }

class StudentClass implements Student {
    constructor(
        public firstName: string,
        public lastName: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return ('Currently working')
    }
    displayName() : string{
        return this.firstName;
    }
}

const student: Student = new StudentClass('Raphael', 'Chemouni')
console.log(student);
console.log(student.workOnHomework());
console.log(student.displayName());

export default printTeacher;
