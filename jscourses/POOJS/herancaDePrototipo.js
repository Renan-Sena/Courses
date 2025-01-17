const user = {
    name: 'Juliana',
    email: 'j@j.comc',
    birth: '2024-1-1',
    role: 'estudante',
    active: true,
    showInfos: function() {
        console.log(this.name, this.birth, this.email);
    }
}

const admin = {
    name: 'Mariane',
    email: 'm@m.com',
    birth: '2024-1-1',
    role: 'admin',
    active: true,
    createCurso: function() {
        console.log('Curso criado')
    }
}

Object.setPrototypeOf(admin, user)
admin.createCurso()
admin.showInfos()