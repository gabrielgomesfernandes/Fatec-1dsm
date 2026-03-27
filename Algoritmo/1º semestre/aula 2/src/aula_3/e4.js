prompt = require("prompt-sync")();

entrada = prompt("digite um numero: ");
limite = parseInt(entrada);
i = 0;

while (i < limite) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i = i + 1;
}
console.log("fim");
