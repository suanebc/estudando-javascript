const frm = document.querySelector("form");
const descricaoConta = document.getElementById("descricaoConta");
const valorTotal = document.getElementById("valorTotal");

  let  resposta = "";
  let contadorConta = 0;
  let valorTotalDaConta = 0;

frm.addEventListener("submit", (e) => {
  e.preventDefault();


  const descricao = frm.inDescricao.value;
  const valor = Number(frm.inValor.value);

  contadorConta++;
  valorTotalDaConta += valor;
  resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";
  descricaoConta.innerText = `${resposta} -----------------------------`;
  valorTotal.innerText = `${contadorConta} Conta(s) - TotalR$: ${valorTotalDaConta.toFixed(2)}`

  frm.inDescricao.value = "";
  frm.inValor.value  = "";
  frm.inDescricao.focus();
})
