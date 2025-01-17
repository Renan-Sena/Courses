let numeroSecreto = gerarNumeroAleatorio();
let contagemTentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMsgInicial () {
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMsgInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!!!!');
        let palavraTentativas = contagemTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns, você acertou o número secreto com ${contagemTentativas} ${palavraTentativas} !!!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', `Errou, o número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('h1', `Errou, o número secreto é maior que ${chute}`);
        }
    }
    contagemTentativas++;
    limparCampo();
}

function verificarNG() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    contagemTentativas = 1;
    exibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function imc(pesoEmKg, alturaEmMetros) {
    let resultadoIMC = pesoEmKg / (alturaEmMetros ** 2);
    return parseFloat(resultadoIMC);
}

let peso = 79.60;
let altura = 1.67;
console.log(imc(peso, altura).toFixed(1));

function calculoFatorial(n1) {
    if (n1 === 0 || n1 === 1) {
        return 1;
    }

    let fatorial = 1
    for(let i = 2; i <= n1; i++){
        fatorial *= i
    }
    return fatorial
}

let n2 = 6
let resultado = calculoFatorial(n2)
console.log(`O  fatorial de ${n2} é ${resultado}`)


function calcularDolarEmReal(dolar) {
    let cotação = 4.80;
    let emReal = dolar * cotação;
    return emReal.toFixed(2);
}

let valorEmDolar = 7;
let valorEmReal = calcularDolarEmReal(valorEmDolar);
console.log(`USD ${valorEmDolar} em reais equivale a R$${valorEmReal}`);


function calculoAlturaPerimetro(alturaM, larguraM) {
    let area = alturaM * larguraM;
    let perimetro = 2 * (alturaM + larguraM);

    console.log(`A área da sala é ${area.toFixed(2)}`);
    console.log(`O perímetro da sala é ${perimetro.toFixed(2)}`);
}

let alturadaSala = 3.22;
let = largura = 12;
calculoAlturaPerimetro(alturadaSala, largura);

function calculoDeSalaCircular(raio) {
    let area = Math.PI * (raio ** 2)
    let perimetro = 2 * Math.PI * raio

    console.log(`A area da sala circular é ${area.toFixed(2)}`);
    console.log(`O perimetro da sala circular é ${perimetro.toFixed(2)}`);
}

let raio = 9;
calculoDeSalaCircular(raio);

function tabuada(number, sNumber) {
    let contador = 1
    while (contador <= sNumber) {
        console.log(`${number} x ${contador} = ${number * contador}`);
        contador++;
    }
}

let number1 = 10;
let number2 = 50;
tabuada(number1, number2);
