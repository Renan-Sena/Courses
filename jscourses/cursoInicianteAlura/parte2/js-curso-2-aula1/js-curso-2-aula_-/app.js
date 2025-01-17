let numeroSecreto = numeroAleatorio(); 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function numeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

// Olá mundo
function ola() {
    console.log('Olá mundo!');
}

ola();

// Olá Nome
function olaNome(nome){
    console.log(`Olá ${nome}!!!`)
}

olaNome('Alice');

// Número multiplicado por 2
function exibirNumero(numero) {
    return numero * 2;
}

let resultado = exibirNumero(2);
console.log(`O resultado é ${resultado}`)

// Media de três números
function exibirTres(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

let media = exibirTres(4, 8, 9);
console.log(media);

// Mostrar o maior número
function exibirMaior(n1, n2) {
    return n1 > n2 ? n1 : n2;
}

let maior = exibirMaior(4, 9);
console.log(maior);

// Potenciação
function exibirMutiplicação(n1) {
    return n1 ** 2;
}

let mult = exibirMutiplicação(4);
console.log(mult);