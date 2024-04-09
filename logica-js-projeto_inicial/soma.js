function soma() {

    let numeros = parseInt(prompt('quantos numero que vai somar'))
    let notas = [];
    let resultado=0
    for (let index = 0; index < numeros; index++) {
        notas.push(parseInt(prompt('digite os numeros')));
        resultado = resultado + notas[index]
    }

    alert(`${resultado}`);
}
function clicou(){
    soma()
}
