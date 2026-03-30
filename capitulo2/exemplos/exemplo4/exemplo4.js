const frm = document.querySelector("form");
const resposta = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const quilo = frm.inQuilo.value
  const consumo = Number(frm.inConsumo.value)

  const valor = (quilo / 1000) * consumo
  resposta.innerText = `Valor a pagar R$${valor.toFixed(2)}`

  e.preventDefault()

})