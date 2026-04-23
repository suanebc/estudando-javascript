const prompt = require('prompt-sync')();
const hoje = new Date();
const dia = hoje.getDate();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();// hoje.getFullYear()+3 = 2029

console.log(`${hoje}\n${hoje.toLocaleDateString('pt-BR')}\nData: ${dia}/${mes}/${ano}`);