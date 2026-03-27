let nros = "19,11,5,10,20".split(",")
let soma = 0;
for(let i = 0; i < nros.length; i++ ){
 soma = soma + parseInt(nros [i]);
}
console.log("Somatório:", soma);