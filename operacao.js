
let repetir = 1

while (repetir===1) {

    let operaçao = prompt('qual operaçao dejesa fazer se for mais digite 1 se for menos digite 2 se for mutiplicaçao digite 3 se for divisão digite 4 ');
    let numero1 = parsefloat(prompt('qual o primeiro numero'));
    let numero2 = parsefloat(prompt('qual o sequndo numero'));
    
    if (operaçao==1) {
        let soma = numero1 + numero2;
        alert(`a soma é ${soma}`);
    } else if (operaçao==2){
        let menos = numero1 - numero2;
        alert(`a menos é ${menos}`);
    } else if (operaçao==3){
        let multiplicaçao = numero1*numero2;
        alert(`a multiplicaçao é ${multiplicaçao}`);
    }else{
        let divisao = numero1/numero2;
        alert(`a divisão é ${divisao}`);
    }
    repetir=prompt('quer fazer outra conta? se sim digite 1 se nao digite 2');
    if(repetir==2){
        repetir = 2;
    }else {
        repetir = 1;
    }
}