alert('bem vindo ao jogo da velha');
let velha =[
   [1,2,3],
   [4,5,6],
   [7,8,9],
]
console.table(velha);
for (let index = 0; index < 9; index++) {
    alert('em qual posiçao dejesa cololocar o x');
    let lugar=parseInt(prompt('se for mo 1 digite,se for no 2 digite 2 se for no 3 digite 3 e assim por diante'));
    if(lugar == 1 ){
        velha[0][0]='x';
    }else if(lugar == 2 ){
        velha[0][1]='x';
    }else if(lugar == 3 ){
        velha[0][2]='x';
    }else if(lugar == 4 ){
        velha[1][0]='x';
    }else if(lugar == 5 ){
        velha[1][1]='x';
    }else if(lugar == 6 ){
        velha[1][2]='x';
    }else if(lugar == 7 ){
        velha[2][0]='x';
    }else if(lugar == 8 ){
        velha[2][1]='x';
    }else if(lugar == 9 ){
        velha[2][2]='x';
    }
    console.table(velha)
    alert('em qual posiçao dejesa cololocar o 0');
    let lugar2=parseInt(prompt('se for mo 1 digite,se for no 2 digite 2 se for no 3 digite 3 e assim por diante'));
    if(lugar2 == 1 ){
        velha[0][0]='o';
    }else if(lugar2 == 2 ){
        velha[0][1]='o';
    }else if(lugar2 == 3 ){
        velha[0][2]='o';
    }else if(lugar2 == 4 ){
        velha[1][0]='o';
    }else if(lugar2 == 5 ){
        velha[1][1]='o';
    }else if(lugar2 == 6 ){
        velha[1][2]='o';
    }else if(lugar2 == 7 ){
        velha[2][0]='o';
    }else if(lugar2 == 8 ){
        velha[2][1]='o';
    }else if(lugar2 == 9 ){
        velha[2][2]='o';
    }
    console.table(velha);

    for (let i = 0; i < 3; i++) {

        if(velha[i][0]=='x' && velha[i][1]=='x' && velha[i][2]=='x' ){   
            alert('o x ganhou');
            index=9;
            i=3;
        }else if(velha[0][i]=='x' && velha[1][i]=='x' && velha[2][i]=='x' ){
            alert('o x ganhou');
            index=9;
            i=3;
        }else if(velha[0][0]=='x' && velha[1][1]=='x' && velha[2][2]=='x' ){
            alert('o x ganhou');
            index=9;
            i=3;
        }else if(velha[0][2]=='x' && velha[1][1]=='x' && velha[2][0]=='x' ){
            alert('o x ganhou');
            index=9;
            i=3;
        }
    }for (let j = 0; j < 3; j++) {

        if(velha[j][0]=='o' && velha[j][1]=='o' && velha[j][2]=='o' ){
            alert('o O ganhou');
            index=9;
            j=3;
        }else if(velha[0][j]=='o' && velha[1][j]=='o' && velha[2][j]=='o' ){
            alert('o O ganhou');
            index=9;
            j=3;
        }else if(velha[0][0]=='o' && velha[1][1]=='o' && velha[2][2]=='o' ){
            alert('o O ganhou');
            index=9;
            j=3;
        }else if(velha[0][2]=='o' && velha[1][1]=='o' && velha[2][0]=='o' ){
            alert('o o ganhou');
            index=9;
            j=3;
        }
    }


}