let lista = []
for (let index = 0; index < 10; index++) {
    lista[index]=(Math.floor(Math.random() * 100 + 1 ));
}
alert(lista.join(', '))
lista.reverse()
alert(lista.join(', '))
