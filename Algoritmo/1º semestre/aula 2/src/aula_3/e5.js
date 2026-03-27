prompt = require("prompt-sync")();

entrada = prompt("entre com seu nome: ");
i = entrada.length - 1;

while (i >= 0) {
  console.log(i, entrada[i]);
  i = i - 1;
}
console.log("fim");
