

function numeroAleatorio(index) {

    return Math.floor(Math.random() * index + 1 );

}


function jogo() {
    
let numeroDePosicoesAleatorias = parseInt(prompt('quantos numeros voce dejeja aleatorizar'))
let numeroSecreto = numeroAleatorio(numeroDePosicoesAleatorias);
let numeroMaximoDeTentativa=parseInt(prompt('quantas tentativas dejeja ter'))
numeroMaximoDeTentativa++

for ( tentativas = 1; tentativas < numeroMaximoDeTentativa; tentativas++ ) {

    let numeroEscholido = parseInt(prompt(`digite um numero de 1 a ${numeroDePosicoesAleatorias}`));

    if(numeroEscholido === numeroSecreto){
        alert('Parabéns, você acertou!');
        break;

    }else if(numeroEscholido > numeroSecreto){
        alert('Você digitou um número maior que o número secreto');
    }else {
        alert('Você digitou um número menor que o número secreto');
    }
    if(tentativas === numeroMaximoDeTentativa){
        alert(`Suas tentativas acabaram`);
    }else if (tentativas <3){
        alert(`você usou  ${tentativas} tentativas`);   
    }else{
        alert(`você usou  ${tentativas} tentativa`);
    }    
}

}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
if (tentativas < numeroMaximoDeTentativa) {
alert(`Você acertou com ${tentativas} ${palavraTentativa}`);
}

function clicou(){
  jogo()
}