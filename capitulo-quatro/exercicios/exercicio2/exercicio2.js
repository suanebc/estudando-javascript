const frm = document.querySelector("form");
const resposta = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const velocidadePermitida = Number(frm.inVelocidadePermitida.value);
  const velocidadeCondutor = Number(frm.inVelocidadeCondutor.value);

  if ( velocidadePermitida >= velocidadeCondutor) {
    resposta.innerText = ` Situação: Sem Multa` 
  } else if ( (velocidadePermitida + (velocidadePermitida * 0.2)) >= velocidadeCondutor ) {
    resposta.innerText = ` Situação: Multa Leve` 
  } else {
    resposta.innerText = ` Situação: Multa Grave` 
  }

})
