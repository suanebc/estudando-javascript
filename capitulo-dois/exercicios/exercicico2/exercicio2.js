frm = document.querySelector("form");
const respostaValorAPagar = document.getElementById("valorAPagar");

frm.addEventListener("submit", (e)=>{
  const valor15Minutos = Number.parseInt(frm.inValor.value)
  const tempoCliente = Number.parseInt(frm.inTempo.value)

  const tempo = tempoCliente / 15
  const valorAPagar = valor15Minutos * Math.ceil(tempo)

  respostaValorAPagar.innerText = `Valor a Pagar R$ ${valorAPagar.toFixed(2)}`

  e.preventDefault()
})
