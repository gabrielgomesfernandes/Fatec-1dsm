prompt = require("prompt-sync")();

i = 0;
while (i < 4) {
  entrada = prompt("insira nome aqui: ");
  console.log(`saida: ${entrada}`);
  i = i + 1;
}
console.log("fim");
