export default class User {
    constructor(name, email, birth, role, active = true) {
        this.name = name
        this.email = email
        this.birth = birth
        this.role = role || "studant"
        this.active = active
    }

    showInfos() {
        return `${this.name}, ${this.email}, ${this.role}`
    }
}

const newUser = new User('Juliana', 'j@j.comc', '2025-01-01')
// console.log(newUser);
// console.log(newUser.showInfos());