const frm = document.querySelector("form");
const respostaNome = document.getElementById("respostaMedicamento")
const respostaPreco = document.getElementById("respostaPromocao")

frm.addEventListener("submit", (e)=>{
  const medicamento = frm.inMedicamento.value
  const preco = Number.parseInt(frm.inPreco.value)

  const promocao = preco * 2

  respostaNome.innerText = `Promoção de ${medicamento}`
  respostaPreco.innerText = `Leve 2 por apenas R$ ${promocao}`

  e.preventDefault()

})