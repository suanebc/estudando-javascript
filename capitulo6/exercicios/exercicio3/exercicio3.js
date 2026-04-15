const frm = document.querySelector("form");
const resposta = document.querySelector("pre");


const candidatos = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = frm.inNome.value        
  const acertos = Number(frm.inAcertos.value);
  candidatos.push({ nome, acertos });
  frm.reset();
  frm.inNome.focus();
  frm.btListar.dispatchEvent(new Event("click"));
});



frm.btListar.addEventListener("click", () => {

  const lista = candidatos.reduce((acumulador,candidatos) =>
    acumulador +candidatos.nome + " - " +candidatos.acertos + "\n", "")
  resposta.innerText = `Lista dos candidatos Cadastrados\n${"-".repeat(40)}\n${lista}`
});

frm.btAprovados2Fase.addEventListener("click", () => {
  const acertoS2Fase = prompt("Número de Acertos para aprovação");
const segundaFase= candidatos.filter((candidato) => {
  return candidato.acertos >= acertoS2Fase ;
});
resposta.innerText = `Lista dos candidatos Aprovados para 2ª fase\n${"-".repeat(40)}\n${lista}`
});
