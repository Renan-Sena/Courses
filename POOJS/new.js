function User (name, email) {
    this.nome = name;
    this.email = email;

    this.showInfos = function () {
        return `${this.name}, ${this.email}`
    }
}

const newUser = new User('juliana', 'j@j.comc')
console.log(newUser.showInfos())
