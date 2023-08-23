export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

export interface CreateEmployee {
    salary: string | (number & { length: 8 })
}

export const createEmployee = (firstName: string, lastName: string, salary: string | number ): DirectorInterface | TeacherInterface => {
    if (typeof salary === 'number' && salary < 500) return new Teacher();
    return new Director();
}

export const isDirector = (employee : DirectorInterface | TeacherInterface) : employee is DirectorInterface => {
    return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

export const executeWork = (employee : DirectorInterface | TeacherInterface) : string => {
    return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

export type Subjects = 'Math' | 'History';

export const teachClass = (todayClass : Subjects) : string => {
    return todayClass === 'Math' ? 'Teaching Math': 'Teaching History'
}
