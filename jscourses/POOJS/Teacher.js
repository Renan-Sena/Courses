import User from "./User.js";

class Teacher extends User {
    constructor(name, email, birth, role = 'admin', active = 'true') {
        super(name, email, birth, role, active)
    }

    aproveStudent(student, course){
        return `Student ${student} passed the ${course} course, responsible for ${this.name}`
    }
}

const newTeacher = new Teacher('Ana', 'A@A.com', '2024-01-01')
// console.log(newTeacher);
console.log(newTeacher.aproveStudent('Juliana', 'Computer Engineering'));
// console.log(newTeacher.showInfos());