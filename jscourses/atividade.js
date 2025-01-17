const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    endereco: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    },
    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: null
    }]
}

// const chavesObjeto = Object.keys(estudante); // Mostrar apenas as chaves
// console.log(chavesObjeto);

// const chavesObjeto_2 = Object.values(estudante); // apenas valores 
// console.log(chavesObjeto_2);

// const chavesObjeto_3 = Object.entries(estudante); // chaves e valores
// console.log(chavesObjeto_3);

// if (!chavesObjeto.includes('endereco')) {
//     console.error('é necessario ter um endereço cadastrado')
// }

function exibirTelefones(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
}

exibirTelefones(...estudante.telefones); // operador de espalhamento

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.endereco[0]
}

console.log(dadosEnvio);