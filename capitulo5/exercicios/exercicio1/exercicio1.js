const frm = document.querySelector("form");
const resposta = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
  e.preventDefault();


  const fruta = frm.inFruta.value;
  const numero = Number(frm.inNumero.value);
  let totalDeFrutas = "";
  for(let i = numero; i > 0; i--){
    totalDeFrutas += `${fruta} *`
    resposta.innerText = ` ${totalDeFrutas} `;
  }

})