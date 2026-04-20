const frm = document.querySelector("form");
const resposta = document.querySelector("span");


frm.addEventListener("submit",(e) => {
  e.preventDefault();
  const fruta = frm.inFruta.value.toUpperCase();
  let respostaJogador = "";

  for(const letra of fruta){
    if(letra == fruta.charAt(0)){
      respostaJogador +=fruta.charAt(0)
    }else {
      respostaJogador += "_"
    }
  }

  resposta.innerText = respostaJogador;
  frm.inFruta.value = "*".repeat(fruta.length);
});