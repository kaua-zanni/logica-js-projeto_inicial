function media() {

    let notas = []
    let resultado= 0
    for (let index = 0; index < 4; index++) {
        notas.push(parseInt(prompt('digite as notas')))
        resultado = resultado + notas[index]
    }
    resultado = resultado/4

    alert(`${resultado}`)

}
function clicou() {
    media()
}