let lista= [];
let maiorNumero = 0
for (let index = 0; index < 10; index++) {
    lista.push(Math.floor(Math.random() * 100 + 1 ));
}
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
maiorNumero = getMaxOfArray(lista);
alert(`${maiorNumero}`)