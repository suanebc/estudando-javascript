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

  const lista = candidatos.reduce((acumulador, candidatos) =>
    acumulador + candidatos.nome + " - " + candidatos.acertos + "\n", "")
  resposta.innerText = `Lista dos candidatos Cadastrados\n${"-".repeat(100)}\n${lista}`
});

frm.btAprovados2Fase.addEventListener("click", () => {
  

  const acertoS2Fase = Number(prompt("Número de Acertos para aprovação"))
  const aprovadosFilter = candidatos.filter(candidato => candidato.acertos >= acertoS2Fase)
  if (aprovadosFilter.length == 0) {       
    alert("Não há aprovados com acertos igual ao solicitado")
    return
  }
  let lista = ""
  for (const candidato of aprovadosFilter) {       
    lista += `${candidato.nome} - ${candidato.acertos}\n`
  }
  resposta.innerText = `Aprovados para segunda fase\n ${"+".repeat(100)}\n${lista}`

});

