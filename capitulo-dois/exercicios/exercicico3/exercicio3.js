frm = document.querySelector("form");
const respostaPromocao = document.getElementById("promocao");

frm.addEventListener("submit", (e)=>{
  const produto = frm.inProduto.value
  const valor = Number(frm.inPreco.value)

  const valorTreceiroProduto = valor / 2 
  const promocaoProduto = (valor * 2) + valorTreceiroProduto


  promocao.innerText = `${produto} - Promoção : leve 3 por R$ ${promocaoProduto} o 3º custa apenasR$ ${valorTreceiroProduto}`

  e.preventDefault()
})
