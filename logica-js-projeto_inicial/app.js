function numeroAleatorio(index) {

    return Math.floor(Math.random() * index + 1 );

}

function jogo() {
    
let numeroDePosicoesAleatorias = parseInt(prompt('quantos numeros voce dejeja aleatorizar'))
let numeroSecreto = numeroAleatorio(numeroDePosicoesAleatorias);
let numeroMaximoDeTentativa=parseInt(prompt('quantas tentativas dejeja ter'))
numeroMaximoDeTentativa++
let listaNumerosDigitados = [];

for ( tentativas = 0; tentativas < numeroMaximoDeTentativa; tentativas++ ) {

    let numeroEscholido = parseInt(prompt(`digite um numero de 1 a ${numeroDePosicoesAleatorias}`));
    listaNumerosDigitados.push(numeroEscholido)
    alert(`vocé digitou o numero ${listaNumerosDigitados[tentativas]}`);
    if(numeroEscholido === numeroSecreto){
        alert(`Você acertou , e digitou os sequintes numeros ${listaNumerosDigitados}`);
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

function clicou(){
  jogo()
}