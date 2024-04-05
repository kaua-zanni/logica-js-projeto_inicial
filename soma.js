function media() {

    let notas = [];
    let sequenciaDeNota = [1,1,2,2];
    let sequeciaDeProva = ['primeira','sequnda','terceira','quarta']
    let resultado=0
    for (let index = 0; index < 4; index++) {
        notas.push(parseInt(prompt(`digite a ${sequeciaDeProva[index]} nota`)));
        resultado = resultado + notas[index]* sequenciaDeNota[index];
    }
    resultado = resultado/6

    alert(`${resultado}`);
}
function clicou() {
    media()
}
