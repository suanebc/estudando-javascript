const prompt = require('prompt-sync')({sigint: true});
const num1 = Number(prompt("Primeiro número: "));
const num2 = Number(prompt("Segundo número: "));
const soma = num1 + num2;
console.log(`Soma é: ${soma}`);