let lista = [1,2,5,5]
let contadorDoIndex0 = 0
let contadorDoIndex1 = 0
let contadorDoIndex2 = 0
for (let index = 0; index < 4 ; index++) {
    if(lista[0]=lista[index+1]){
        contadorDoIndex0++
        break
    }
    for (let i = 0; i < 4 ; i++) {
        if(lista[1]=lista[i+2]){
            contadorDoIndex1++
            break

        
       }for (let x = 0 ; x < 4 ; x++) {
        if(lista[2]=lista[x+2]){
            contadorDoIndex2++
            break
         }
        }
}
}
alert(`${contadorDoIndex0}`)
alert(`${contadorDoIndex1}`)
alert(`${contadorDoIndex2}`)