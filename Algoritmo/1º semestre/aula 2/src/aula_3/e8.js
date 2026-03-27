prompt = require('prompt-sync')();

nomes = [];
// percorre para colocar os elementos no array
entrada = "abc";
while( entrada != "" ){
    entrada = prompt("Entre com o nome:");
    nomes.push(entrada);
}
// percorre para imprimir
i = 0;
while( i < nomes.length ){
    console.log( nomes[i] );
    i = i + 1;
}