const frm = document.querySelector("form");
const resposta = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);
  //let parOuImpar;
  /*if (numero % 2 == 0){
    resposta.innerText = ` ${numero} é Par`
  } else {
    resposta.innerText = ` ${numero} é Ímpar`
  }*/
  numero % 2 == 0 
    ? resposta.innerText = ` ${numero} é Par` 
    : resposta.innerText = ` ${numero} é Ímpar`;

})
