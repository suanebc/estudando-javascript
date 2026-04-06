const frm = document.querySelector("form");
const resposta = document.querySelector("pre")
const carros = []


frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const modelo = Number(frm.inModelo.value);
  const preco = Number(frm.inPreco.value);

  carros.push({ modelo, preco });
  frm.inModelo.value = "";
  frm.inPreco.value = "";
  frm.inModelo.focus();

  frm.btListar.dispatchEvent(new Event("click"));

});

frm.btListar.addEventListener("Click", () => {
  if (carros.length == 0) {
    alert("Não há carros na lista");
    return;
  }
  const lista = carros.reduce((acumulador, carro) =>
    acumulador + carro.modelo + " - R$: " + carros.preco.toFixed(2) + "\n");
  resposta.innerText = `lista dos carros cadastrados\n${"-".repeat(40)}\n ${lista}`;

})

frm.btFiltrar.addEventListener("click", () =>{
  const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"));
  if(maximo == 0 || isNaN(maximo)) {
    return;
  }
  const carrosFilter = carros.filter(carro => carro.preco <= maximo)
  if(carrosFilter.length == 0 ){
    alert("Não há carros com preço inferiorou igaul ao solicitado");
    return;
  }
  let lista = "";
  for(const carro of carrosFilter){
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
  }
  resposta.innerText = `Carros até R$ ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`;
});

frm.btSimular.addEventListener("click", () => {
  const desconto = Number(prompt("Qual o percentual de desconto:"));
  if(desconto == 0 || isNaN(desconto)) {
    return;
  }
  const carroDesconto = carros.map(auxiliar => ({
    modelo: auxiliar,
    preco: auxiliar.preco - (auxiliar.preco * desconto / 100)
  }));
  let lista ="";
  for(const carro of carroDesconto) {
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
  }
  resposta.innerText = `Carros com desconto: ${desconto} %\n ${"-".repeat(40)}\n${lista}`
})



