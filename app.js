

alert('ola');  // aparece pu usuario um janela de alerta     

let numeroSecreto = 5;                                                      //usamos para declara uma varivel
let numeroEscholido = parseInt (prompt('digite um numero de 1 a 50'));

if (numeroSecreto == numeroEscholido) {                   //o if é se e o else if é senao se ja o else é senao
    alert(`parabens vocé acertou ${numeroSecreto}`);
    } else if(numeroSecreto<numeroEscholido) {
        alert('o numero  é menor');
    } else {
        alert('o numero é maior');
    }