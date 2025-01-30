let numeroSecreto = gerarNumeroAleatorio();

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou');
    }

    if (chute > numeroSecreto) {
        exibirTexto('p', 'O número secreto é menor');
    } else {
        exibirTexto('p', 'O número secreto é maior');
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}