const prompt = require('prompt-sync')({sigint: true});
const veiculo = prompt("Veiculo: ");
const preco = Number(prompt("Preço: "));
const valorEntrada = preco * 0.50;
const valorParcela = (preco * 0.50) / 12;
console.log(`Promoção: ${veiculo}`);
console.log(`Entrada de R$: ${valorEntrada.toFixed(2)}`);
console.log(`12x de R$: ${valorParcela.toFixed(2)}`);