alert('Boas vindas ao jogo do número secreto');

let nome = prompt('Digite seu nome');
alert(`Muito bem vindo Sr.${nome}`);

//Verificar o dia da semana
let perguntaDia = prompt('Qual dia da semana é hoje?');
if (perguntaDia == 'Sábado' || perguntaDia == 'sabado' || perguntaDia == 'Sabado' || perguntaDia == 'domingo' || perguntaDia == 'Domingo') {
    alert('Bom fim de semana!');
}else {
    alert('Boa semana!');
}

//verificar se número é positivo ou negativo
let n1 = prompt('Digite um número');
if (n1 < 0) {
    alert(`O número ${n1} é negativo`);
}else {
    alert(`O número ${n1} é positivo`);
}

//Sistema de pontuação de jogo
let pts = 150;
if (pts >= 100) {
    console.log('Parabéns, você venceu!');
}else {
    console.log('Tente novamente para vencer!');
}

//Informar o saldo em conta
let saldoConta = 3200.00;
alert(`Seu saldo em conta é ${saldoConta}`);

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);

let numeroSecreto = 4;

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

if (chute == numeroSecreto) {
    alert('Acertou');
} else {
    // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
    console.log('Valor do número secreto:', numeroSecreto);
    alert('O número secreto era ' + numeroSecreto);
}
