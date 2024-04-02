

function numeroAleatorio(index) {

    return Math.floor(Math.random() * index + 1 );

}

function jogo() {
    
let numeroDePosicoesAleatorias = parseInt(prompt('quantos numeros voce dejeja aleatorizar'))
let numeroSecreto = numeroAleatorio(numeroDePosicoesAleatorias);

for ( tentativas = 1; tentativas < 6; tentativas++ ) {

    let numeroEscholido = parseInt(prompt(`digite um numero de 1 a ${numeroDePosicoesAleatorias}`));

    if(numeroEscholido === numeroSecreto){
        alert('Parabéns, você acertou!');
        break;

    }else if(numeroEscholido > numeroSecreto){
        alert('Você digitou um número maior que o número secreto');
    }else {
        alert('Você digitou um número menor que o número secreto');
    }
    if(tentativas === 6){
        alert(`Suas tentativas acabaram`);
    }else if (tentativas <3){
        alert(`você ainda tem  ${6 - tentativas} tentativas`);   
    }else{
        alert(`você ainda tem  ${6 - tentativas} tentativa`);
    }    
}

}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
if (tentativas < 6) {
alert(`Você acertou com ${tentativas} ${palavraTentativa}`);
}

function clicou(){
  jogo()
}