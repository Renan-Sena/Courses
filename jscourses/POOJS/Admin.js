import User from "./User.js";

export default class Admin extends User {
    constructor(name, email, birth, role = 'admin', active = 'true') {
        super(name, email, birth, role, active)
    }
    
    showInfos() {
        const infos = super.showInfos()
        return `admin - ${infos}`
    }

    createCourse(courseName, vacanciesNum){
        return `course ${courseName} created with ${vacanciesNum} vacancies.`
    }
}

// const newAdmin = new Admin('Rodrigo', 'r@r.comf', '2025-01-01')
// console.log(newAdmin.showInfos());
// console.log(newAdmin.createCourse('Python', 30));