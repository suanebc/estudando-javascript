// O programa simula a compra em uma farmácia que lê o 
// valor total de uma compra e exibe uma resposta com
//  o número máximo de vezes que ocliente pode parcelar
//  essa compra e o valor de cada parcela 
// condições: 
// 1) o valor mínimo de cada parcela é de R$ 200,00 
// 2) Só pode parcelar até 6x

const prompt = require('prompt-sync')({sigint: true});
const valor = Number(prompt("Valor da Compra R$: "));
const auxiliar = Math.floor(valor / 20);
const parcelas  = auxiliar == 0 ? 1 : auxiliar > 6 ? 6 : auxiliar;
const valorparcela = valor / parcelas;
console.log(`Pode pagar em ${parcelas}x de R$:${valorparcela.toFixed(2)}`);

