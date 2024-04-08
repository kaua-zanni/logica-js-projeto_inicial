let linhas = (parseInt(prompt('quantas linhas dejeja ter a tabela')));
let colunas = (parseInt(prompt('quantas colunas dejeja ter a tabela')));
let tabela = []

for (let index = 0; index < linhas; index++) {
   tabela[index]=[]
   for (let i = 0; i < colunas; i++) {
     tabela[index][i]=(Math.floor(Math.random() * 100 + 1 ));
}
}
console.table(tabela)

