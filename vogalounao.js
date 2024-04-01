function vogal(letra) {

if (letra=='a'|| letra=='e' || letra=='i' || letra=='o' || letra=='u' ) {
    alert(`a letra ${letra} é vogal`)
} else {
    alert(`a letra ${letra} é uma consoante`)
}

}

let letraDigitada = prompt('digite uma letra minuscula para saber se é vogal ')

vogal(letraDigitada)