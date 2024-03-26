

alert('ola');  // aparece pu usuario um janela de alerta     

let numeroSecreto = math.floor(math.random() * 50)  //math.floor serve para arendondar um numero e math.random()  *x serve para randomizar numeros                                                //usamos para declara uma varivel
let numeroEscholido = parseInt (prompt('digite um numero de 1 a 50'));
let numeroTentativa

while (numeroTentetiva<= 3 ) {

    numeroTentativa = numeroTentativa + 1;
  
    if (numeroSecreto == numeroEscholido) {                   //o if é se e o else if é senao se ja o else é senao
    alert(`parabens vocé acertou ${numeroEscholido}`);
         } else if(numeroSecreto<numeroEscholido) {
             alert(`o numero ${numeroEscholido} é menor do que o secreto`);   //usamos a crase (`) quando precisamos integrar uma variravel no alert
         } else {
        alert(`o numero  ${numeroEscholido} é maior`);
         }

}