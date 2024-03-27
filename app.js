
alert('ola');    

let numeroSecreto=Math.floor(Math.random()*50);

for (let numeroTentativa = 0;numeroTentativa<=10; numeroTentativa++) {

    let numeroEscholido = parseInt(prompt('digite um numero de 1 a 50'));

         if(numeroEscholido==numeroSecreto){

            alert('parabens vocé acertou o numero escholido')
            break

         } else if (numeroSecreto<numeroEscholido){

            alert(`o numero secreto é menor que ${numeroEscholido}`)

         } else{

            alert(`o numero secreto é maior que ${numeroEscholido}`)

         }

}

