const frm = document.querySelector("form");
const notas100 = document.getElementById("RespostaNotas100");
const notas50 = document.getElementById("RespostaNotas50");
const notas10 = document.getElementById("RespostaNotas10");



frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const saque = Number(frm.inSaque.value);

  if (saque % 10 != 0) {
    alert("Valor inválido para as notas disponíveis")
    frm.inSaque.focus();
    return
  }

  const notasCem = Math.floor(saque / 100);
  let resto = saque % 100;
  const notasCinquenta = Math.floor(resto / 50);
  resto = resto % 50;
  const notasDez = Math.floor(resto / 10);

  if (notasCem > 0) {
    notas100.innerText = ` Notas de R$ 100,00 : ${notasCem}`;
  }
  if (notasCinquenta > 0) {
    notas50.innerText = `Notas de R$ 50,00 : ${notasCinquenta}`;
  }
  if (notasDez > 0 ) {
    notas10.innerText = `Notas de R$ 10,00 : ${notasDez}`;

  }

})
