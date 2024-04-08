let arr =[1,2,3,3,5];

function soma (){
let lista = [];
let resultado = 0;
for (let index = 0; index < 10; index++) {
    lista.push(Math.floor(Math.random() * 100 + 1 ));
    resultado = resultado + lista[index];
}
alert(`${resultado}`);
}

function fatorial (){
    let numero = parseInt(prompt('qual numero dejesa calcular o fatorial'));
    let resultado = 1;
    for (let index = 0; index < numero; index++) { 
       resultado=resultado*(numero-index);
    }
    alert(`${resultado}`);
}
function maior(arr){                                             //basta usar:function getMaxOfArray(numArray) {
    let maior = arr[0];                                          //             return Math.max.apply(null, numArray);
    for(let i = 0; i < arr.length; i++){                         //           }
        if(arr[i] > maior){                                      //           maiorNumero = getMaxOfArray(lista);
            maior = arr[i];
        }
    }
    alert(`${maior}`);
}
function Inveso(arr){                               //basta usar o lista.reverse()
    let arrInversa = [];
    for(let i = arr.length - 1; i >= 0; i--){
        arrInversa.push(arr[i]);
    }
};
function contador(lista) {
    let contadorDoIndex0 = 0;
    for (let index = 0; index < lista.length ; index++) {
       for (let i = 0; i < lista.length; i++) {
            if(lista[index] == lista[i] && index != i && index >= i ){
                contadorDoIndex0++;
            }
       }
    }
   alert(`${contadorDoIndex0}`)
};
function table () {
    let tabela = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    console.table(tabela)
    for (let index = 0; index < 3; index++) {
        for (let i = 0; i < 3; i++) {
            tabela[index][i] = (Math.floor(Math.random() * 100 + 1));
        }
    }
    console.table(tabela)
}
function semDuplicacao(numeros) {
    numeros= numeros.filter((valorAtual, indice, varArray) => indice === varArray.indexOf(valorAtual));
    console.log(numeros);
}
function clicou() {
    fatorial ();
}