palavra=prompt('qual a palavra que dejesa contar o numero de vogais')
vogal=['a','e','i','o','u']
function vogais (str,char)  {

    let contadorDeVogais = 0;
   
    for (let char of str) {
   
      if (str.includes(char)) contadorDeVogais++;
   
    }
   
    return contadorDeVogais;
   
};
let numero = vogais(palavra,vogal)
alert(`${numero}`)