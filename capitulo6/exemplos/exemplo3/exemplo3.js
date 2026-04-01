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
  inModelo.focus();

  frm.btListar.dispatchEvent(new Event("click"));

});

frm.btListar.addEventListener("Click", () => {
  if (carros.length == 0) {
    alert("Não há carros na lista");
    return;
  }
  const lista = carros.reduce((acumulador, carro) =>
    acumulador + carro.modelo + " - R$: " + carros.preco.toFixed(2) + "\n");
  resposta.innerText = `lista dos carros cadastrados\n${"-".repeat(40)}\n ${lista}`

})

frm.btFiltrar.addEventListener("click", () =>{
  const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))
})

