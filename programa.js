let numeros = [];                                                            //organiza
for (let index = 0; index < 10; index++) {
    numeros.push(Math.floor(Math.random() * 100 + 1 ));
}
numeros.sort(function compararNumeros(a, b) { return a - b } );
alert(numeros.join(', '));
