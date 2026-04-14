const frm = document.querySelector("form");
const resposta = document.querySelector("pre");


const candidatos = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault()
  const nome = frm.inNome.value        // obtém dados do form
  const acertos = Number(frm.inAcertos.value)
  candidatos.push({ nome, acertos })
  frm.reset();
  frm.inNome.focus();
  frm.btAdicionar.dispatchEvent(new Event("click"));
}

});

frm.btAdicionar.addEventListener("click", () => {

  let lista = "";

  for (const candidato of candidatos) {
    lista += ` ${candidato[0]} - ${candidato[1]}`;
  }
  resposta.innerText = lista;
});
/*
f
});
*/
