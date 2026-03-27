const frm = document.querySelector("form");
const respostaSomaDosDivisores = document.querySelector("h3");
const respostaEPerfeito = document.querySelector("h4");


frm.addEventListener("submit", (e) => {
  e.preventDefault();


  const numero = Number(frm.inNumero.value);
  let divisor = "";
  let somaDosDivisores = 0;
  for (let i = 0; i < numero; i++) {

    if (numero % i === 0) {
      divisor += `${i}, `
      somaDosDivisores += i;
      respostaSomaDosDivisores.innerText = `${divisor} (soma = ${somaDosDivisores}) `;
      if (somaDosDivisores === numero) {
        respostaEPerfeito.innerText = `${numero} é perfeito `;
      } else {
        respostaEPerfeito.innerText = `${numero} não é perfeito `;
      }
    }


  }

})