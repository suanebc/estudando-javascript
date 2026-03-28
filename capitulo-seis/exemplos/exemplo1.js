const frm = document.querySelector("form");
const respostaNome = document.querySelector("span");
const respostaLista = document.querySelector("pre");

const pacientes = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inPaciente.value; 
  pacientes.push(nome);
  let lista = "";
  for(let i = 0; i < pacientes; i++){
    lista += `${i + 1}. ${pacientes[i]}\n`;
  }
  respostaLista.innerText = lista;
  frm.inPaciente.value = "";
  frm.inPaciente.focus();
});



