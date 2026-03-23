const frm = document.querySelector("form");
const respostaTempo = document.querySelector("h3");
const respostaTroco = document.querySelector("h4");


frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value);
  let troco;
  let tempo;

  const valor30Minutos = 1;
  const valor60Minutos = 1.75;
  const valor120Minutos = 3;

  if (valor > valor120Minutos) {
    troco = valor - valor120Minutos;
    tempo = "120 min";
  } else if (valor == valor120Minutos) {
    tempo = "120 min";
  } else if (valor < valor120Minutos && valor > valor60Minutos){
    troco = valor - valor60Minutos;
    tempo = "60 min";
  } else if (valor == valor60Minutos) {
    tempo = "60 min";
  } else if (valor < valor60Minutos && valor > valor30Minutos) {
    troco = valor - valor30Minutos;
    tempo = "30 min";
  } else if  (valor == valor30Minutos) {
    tempo = "30 min";
  } else {
    alert(`O valor de R$ ${valor} é insuficiente`);
  }


  respostaTempo.innerText = `Tempo: ${tempo}`;
  respostaTroco.innerText = `Troco R$: ${troco.toFixed(2)}`;

})
