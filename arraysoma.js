let lista = []
let resultado = 0
for (let index = 0; index < 10; index++) {
    lista.push(Math.floor(Math.random() * 100 + 1 ));
    resultado = resultado + lista[index]
}
alert(`${resultado}`)