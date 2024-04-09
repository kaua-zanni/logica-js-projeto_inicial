let palavra = prompt('Por favor, insira seu texto');
function inverter(x) {
  return x.split('').reverse().join('');
}
let palavrainvertda = inverter(palavra)
alert(`${palavrainvertda}`)
if(palavra==palavrainvertda){
    alert('essa palavra é uma palíndromo')
}