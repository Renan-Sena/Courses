import User from "./User.js";
import Teacher from "./Teacher.js";
import Admin from "./Admin.js";

const newUser = new User('Juliana', 'j@j.comc', '2025-01-01')
const newAdmin = new Admin('Rodrigo', 'r@r.comf', '2025-01-01')
const newTeacher = new Teacher('Renan', 'r@r.com', '2025-01-01')
const fictitiousData = User.showInfosGenerics('Cassio', 'c@c.com')

console.log(newUser.showInfos());
// console.log(newAdmin.showInfos());
// console.log(newTeacher.showInfos());
console.log(fictitiousData);

// newUser.name = 'Julia'
// console.log(newUser.name);

// console.log(newAdmin.name, newAdmin.email, newAdmin.birth);
// console.log(newUser.showInfos());

// console.log(newUser.nome = 'renan')