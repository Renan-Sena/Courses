import User from "./User.js";

class Admin extends User {
    constructor(name, email, birth, role = 'admin', active = 'true') {
        super(name, email, birth, role, active)
    }
}

const newAdmin = new Admin('Rodrigo', 'r@r.comf', '2025-01-01')
console.log(newAdmin);
console.log(newAdmin.showInfos());