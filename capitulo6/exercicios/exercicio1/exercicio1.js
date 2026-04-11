const frm = document.querySelector("form");
const resposta = document.querySelector("pre");

const clubes = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault()                           // evita envio do form
  const clube = frm.inClube.value;                // obtém conteúdo do campo
  criancas.push(clube);               // adiciona dados ao vetor
  frm.reset()  ;                                // limpa campos do form
  frm.inClube.focus();                           // posiciona no campo de formulário
  frm.btListar.dispatchEvent(new Event("click")); // dispara click em btListar
});
/*
frm.btListar.addEventListener("click", () => {
  if (clubes.length == 0) {                    // se vazio, exibe alerta
    alert("Não há clubes na lista")
    return;
  }
  let lista = "";                                // para concatenar lista de crianças
  for (const clube of clubes) {
    lista += `${clube}\n`;
  }
  resposta.innerText = lista;
});
/*
frm.btJogar.addEventListener("click", () => {
    if (clubes.length % 2 != 0) {
    alert(` Exitem apenas ${clubes.length}`);
    return
  } else {
      let lista = "";                                // para concatenar lista de crianças
  for (const clube of clubes) {
    lista += `${clube}\n`;
  }
  resposta.innerText = lista;
  }
})*/