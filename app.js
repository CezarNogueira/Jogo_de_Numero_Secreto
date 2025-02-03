let numerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirImagem(tag, src) {
    /*padrao = 'https://i.pinimg.com/originals/4a/29/97/4a2997ff3bc339c9f1527b1a19ec9f40.gif';
    acerto = 'https://i.gifer.com/origin/35/3516b5ffb1c132e6ade61f768b3c2dda_w200.gif';
    erro = 'https://image.myanimelist.net/ui/u60Crn7tADGIKarVpy6ivEMh10_XVs0D1MgNb_41YGYlEDWQvQQaB_dvgKbakTyWBr3j7n8CDvR5jBQneGcbJg';*/
    let elemento = document.querySelector(tag);
    elemento.src = src;
}

function exibirInicio() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
    exibirImagem('img', 'https://i.pinimg.com/originals/4a/29/97/4a2997ff3bc339c9f1527b1a19ec9f40.gif')
}

exibirInicio();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTexto('p', mensagemTentativas);
        exibirImagem('img', 'https://i.pinimg.com/originals/bd/22/c5/bd22c5644c600532c3370b63134a2d35.gif');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        exibirImagem('img', 'https://image.myanimelist.net/ui/u60Crn7tADGIKarVpy6ivEMh10_XVs0D1MgNb_41YGYlEDWQvQQaB_dvgKbakTyWBr3j7n8CDvR5jBQneGcbJg');
        if (chute > numeroSecreto) {
            exibirTexto('p', 'O número secreto é menor');
        } else {
            exibirTexto('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementos = numerosSorteados.length;

    if(quantidadeElementos == numeroLimite) {
        numerosSorteados = [];
    }
    if(numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirInicio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}