const user = {
    name: 'Juliana',
    email: 'j@j.comc',
    birth: '2024-1-1',
    role: 'estudante',
    activ: true,
    showInfos: function() {
        console.log(this.name, this.birth);
    }
}

// user.showInfos();

const show = user.showInfos //= const show = function() {console.log(this.name, this.birth);}

const showName = show.bind(user);
showName();