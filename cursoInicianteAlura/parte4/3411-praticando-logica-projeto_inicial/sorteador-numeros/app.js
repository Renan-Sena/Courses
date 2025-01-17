function sortear(sorteados) {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "até o número". Verifique!');
        return;
    }   

    if (quantidade > ate - de + 1) {
        alert('Campo "Quantidade" deve ser igual ou inferior ao intervalo de números entre os campos "Do número" e "Até o numero".');
        return;
    }
    console.log(quantidade, de, ate);

    sorteados = [];
    let numero = [];

    for (let i = 0; i < quantidade; i++) {
        numero = gerarNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = gerarNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

    alterarStatusBotao()

    console.log(sorteados)
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
    console.log(sorteados);
}