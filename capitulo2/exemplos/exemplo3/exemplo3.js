const frm = document.querySelector("form");
const resposta1 = document.getElementById("outResp1");
const resposta2 = document.getElementById("outResp2");
const resposta3 = document.getElementById("outResp3");

frm.addEventListener("submit", (e) => {
  const veiculo = frm.inVeiculo.value
  const preco = Number(frm.inPreco.value)

  const entrada = preco * 0.50
  const parcela = (preco * 0.08) / 24

  resposta1.innerText = `Promoção ${veiculo} `
  resposta2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`
  resposta3.innerText = `+24x de R$ ${parcela.toFixed(2)}`

  e.preventDefault()

})