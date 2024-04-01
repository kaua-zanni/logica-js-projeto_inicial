
let numeroSecreto = Math.floor(Math.random() * 2 + 1 );
let tentativas = 1;

while (tentativas < 6) {

    let numeroEscholido = parseInt(prompt('Digite um número de 1 a 50'));

    if(numeroEscholido === numeroSecreto){
        alert('Parabéns, você acertou!');
        break;

    }else if(numeroEscholido > numeroSecreto){
        alert('Você digitou um número maior que o número secreto');
    }else {
        alert('Você digitou um número menor que o número secreto');
    }
    tentativas++;
    if(tentativas === 6){
        alert(`Suas tentativas acabaram`);
    }else if (tentativas <3){
        alert(`você ainda tem  ${6 - tentativas} tentativas`);   
    }else{
        alert(`você ainda tem  ${6 - tentativas} tentativa`);
    }    
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
if (tentativas < 6) {
alert(`Você acertou com ${tentativas} ${palavraTentativa}`);
}