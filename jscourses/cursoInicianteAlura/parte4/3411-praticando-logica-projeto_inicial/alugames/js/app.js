let jogosAlugados = 0;


function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}


function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--;
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }


    contarEExibirJogosAlugados();
}


// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});


// Para descobrir se a palavra é um Palíndromo
const estaPalavraPalindromo = function (palavra) {
    var separandoLetrasDasPalavras = palavra.split('');
    var palavraInvertida = separandoLetrasDasPalavras.reverse();
    palavraInvertida = palavraInvertida.join('')
    if (palavra == palavraInvertida) {
        console.log(`"${palavra}" é um palindromo`)
    } else {
        console.log(`"${palavra}" não é um palindromo`)
    }
    console.log(palavraInvertida);
}

estaPalavraPalindromo('rever');

// Colocar números em ordem crescente
const numerosOrdenados = function(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    return `Números ordenados: ${numerosOrdenados.join(', ')}`;
}

console.log(numerosOrdenados(9, 2, 6));
