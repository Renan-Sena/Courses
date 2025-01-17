const estudantes = require('./estudante.json');

function buscaInformacoes(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEcontrado = buscaInformacoes(estudantes, 'nome', 'Oralle');
console.log(estudanteEcontrado);

const telefoneEstudante = buscaInformacoes(estudantes, 'telefone', '7919437785');
console.log(telefoneEstudante);
