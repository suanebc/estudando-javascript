const prompt = require('prompt-sync')();
const carros = [];
carros.push({modelo:"Sandero", ano: 2020, preco:42000});
carros.push({modelo:"Kwid", ano: 2024, preco:52000});
carros.push({modelo:"Argo", ano: 2021, preco:54000});

for(const carro of carros){
  const {modelo, ano, preco} = carro; // destruturação em objeto 
  console.log(`${modelo}: ${ano} preco: ${preco}`);
}

const nomes = ["Carla", "Ana", "Maria","Carolina"]
const [medica, professora, analista, recepcionista, biologa] = nomes

console.log(`${medica} é medica `) // destruturação em vetor
console.log(`${biologa} é biologa `) // destruturação em vetor8u