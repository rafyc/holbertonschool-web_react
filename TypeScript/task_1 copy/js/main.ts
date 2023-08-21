export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
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

    workDirectorTasks(): string {
        return 'Getting to work';
    }
}

export interface CreateEmployee {
    salary: string | (number & { length: 8 })
}

function createEmployee(salary: string | number ): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) return new Teacher();
    return new Director();
}
