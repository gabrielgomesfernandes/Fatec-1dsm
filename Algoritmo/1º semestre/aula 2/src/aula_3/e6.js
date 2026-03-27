prompt = require("prompt-sync")();

entrada = prompt("entre com seu nome: ");
i = 0;

while (i < entrada.length) {
  if (i % 2 == 0) {
    console.log(i, entrada[i]);
  }
  i = i + 1;
}
console.log("fim");
