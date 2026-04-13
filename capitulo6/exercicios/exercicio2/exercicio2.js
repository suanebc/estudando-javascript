const frm = document.querySelector("form");
const respostaNumeros = document.querySelector("pre");
const respostaOrdem = document.querySelector("h3");

const numeros = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault()
  const numero = frm.inNumero.value;
  let num = numeros.includes(numero);
  if(num){
    alert(`${numero} já existe na lista. Por favos, tente outro valor!`)
  } else{
  numeros.push(numero);
  frm.reset();
  frm.inNumero.focus();
  frm.btAdicionar.dispatchEvent(new Event("click"));
  }

});

frm.btAdicionar.addEventListener("click", () => {

  let lista = "";

  for (const numero of numeros) {
      lista += ` ${numero}`;
  }
  respostaNumeros.innerText = lista;
});

frm.btVerificaOrdem.addEventListener("click", () => {
  if (numeros.length == 0) {                    // se vazio, exibe alerta
    alert("Não há números na lista")
    return;
  }
  const ordem = numeros.every((elemento, indice) => {
    if (indice === numeros.length - 1) return true;
    return elemento <= numeros[indice + 1];

  });
  if (ordem) {
    respostaOrdem.innerText = "Números em ordem crescente";
  } else {
    respostaOrdem.innerText = "Atenção...Números não estão em ordem crescente";

  }

});

