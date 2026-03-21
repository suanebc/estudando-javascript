const frm = document.querySelector("form");
const resposta = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = frm.inNumero.value;
  const numeroPar = numero % 2 == 0;
  let resposta;
  numeroPar ? resposta.innerText = ` ${numero} é par` : resposta.innerText = ` ${numero} é ímpar`;

})
