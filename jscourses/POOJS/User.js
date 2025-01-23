export default class User {
    constructor(name, email, birth, registration, code, role, active = true) {
        this.name = name
        this.email = email
        this.birth = birth
        this.registration = registration
        this.code = code
        this.role = role || "studant"
        this.active = active
    }

    createProfile() {
        
    }

    deleteProfile() {

    }

    showInfos() {
        return `${this.name}, ${this.email}, ${this.role}, ${this.code}`
    }
}

let randomNumber = Math.floor(Math.random(100000) * 999999);
const newUser = new User('Juliana', 'j@j.comc', '2025-01-01', Date(), randomNumber)
console.log(newUser);
// console.log(newUser.showInfos());