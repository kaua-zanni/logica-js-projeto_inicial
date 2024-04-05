function fatorial (){
    let numero = parseInt(prompt('qual numero dejesa calcular o fatorial'))
    let resultado = 1
    for (let index = 0; index < numero; index++) { 
       resultado=resultado*(numero-index)
    }
    alert(`${resultado}`)
}
function clicou(){
    fatorial()
}