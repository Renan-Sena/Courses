export default class User {
    #name
    #email
    #birth
    #role
    #active
    constructor(name, email, birth, role, active = true) {
        this.#name = name
        this.#email = email
        this.#birth = birth
        this.#role = role || 'student' || 'admin'
        this.#active = active
    }

    get name() {
        return this.#name
    }

    get email() {
        return this.#email
    }

    get birth() {
        return this.#birth
    }

    get role() {
        return this.#role
    }

    get active() {
        return this.#active
    }

    set name(newName) {
        if (newName === '') {
            throw new Error('Formato de nome invalido')
        }
        this.#name = newName
    }

    // #setupObjUser() {
    //     return ({
    //         name: this.#name,
    //         email: this.#email,
    //         birth: this.#birth,
    //         registration: this.#registration,
    //         code: this.#code,
    //         role: this.#role,
    //         active: this.#active,
    //     })
    // }

    createProfile() {
        
    }

    deleteProfile() {

    }

    showInfos() {
        // const ObjUser = this.#setupObjUser()
        // return `${this.#name}, ${this.#email}`
        if (this.role ===   "student") {
            return `Student Data: ${this.name}, ${this.birth}`
        }
        if (this.role ===   "admin") {
            return `Admin Data: ${this.name}, ${this.role}`
        }
        if (this.role ===   "teacher") {
            return `Teacher Data: ${this.name}, ${this.email}`
        }
    }

    static showInfosGenerics(name, email) {
        return `${name}, ${email}`
    }
}

// let randomNumber = Math.floor(Math.random(100000) * 999999);
// const newUser = new User('Juliana', 'j@j.comc', '2025-01-01', Date(), randomNumber)
// console.log(newUser);
// console.log(newUser.showInfos());