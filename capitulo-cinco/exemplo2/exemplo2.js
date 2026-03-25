const frm = document.querySelector("form");
const numeroDecrecente = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);
  let resposta = `Entre ${numero} e 1:\n`;
  for(let i = numero; i>0; i--) {
    resposta = resposta + i + "," ;
  }
  numeroDecrecente.innerText = resposta;
 
})
