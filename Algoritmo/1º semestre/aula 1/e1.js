const prompt = require("prompt-sync")({ sigint: true });
idade = prompt("insira sua idade: ");
if (idade < 18) {
  console.log("menor de idade");
} else {
  if (idade < 65) {
    console.log("trabalhando");
  } else {
    console.log("aposentado");
  }
}
