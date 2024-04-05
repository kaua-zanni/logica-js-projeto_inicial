let lista = []
for (let index = 0; index < 10; index++) {
    lista[index]=(Math.floor(Math.random() * 10 + 1 ));
}
let listaSemDuplicados = lista.filter((valor, indice, self) => {
  return self.indexOf(valor) === indice;
});
alert(listaSemDuplicados.join(', '))