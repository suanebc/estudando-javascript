const frm = document.querySelector("form");
const respostaErros = document.getElementById("outErros");
const respostaChances = document.getElementById("outChances");
const respostaDica = document.getElementById("outDica");

const erros =[];
const sorteado = Math.floor(Math.random() * 100) + 1;
const chances = 6;

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);

  if(numero == sorteado) {
    respostaDica.innerText = ` PARABÉNS !!! Número sorteado ${sorteado}`;
  } else {
    if(erros.includes(numero)){
      alert(`Você jáapostou ${numero}, tente outro ...`);
    } else {
      erros.push(numero);
      const numeroErros = erros.length;
      const numeroChances = chances - numeroErros;

      respostaErros.innerText = ` ${numeroErros} (${erros.join(", ")})`;
      respostaChances.innerText = numeroChances;
      if(numeroChances == 0){
        alert("Suas Chances acabaram ...");
        frm.btSubmit.disabled = true;
        frm.btNovo.classeName = "exibe";
        respostaDica.innerText = `Game Over!! Número Sorteado ${sorteado}`
      }else{
        const dica = numero < sorteado ? "maior" : "menor";
        respostaDica = `Dica: Tente umnúmero ${dica}!`;
      }
    }
  }
  frm.inNumero.value = "";
  frm.inNumero.focus();
});

frm.btNovo.addEventListener("Click", () => {
  location.reload();
})


