const frm = document.querySelector("form");
const resposta = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
  e.preventDefault();


  const numero = frm.inNumero.value;
  let numeroDeDivisores = 0;

  for (let i = 1; i <= numero; i++) {
    if (numero % i == 0){
      numeroDeDivisores++;
    }
  }
  
  if(numeroDeDivisores == 2) {
    resposta.innerText = `${numero} é primo`;
  } else {
    resposta.innerText = `${numero} não é primo`
  }
})
