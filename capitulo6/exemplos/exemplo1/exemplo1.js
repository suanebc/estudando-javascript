const frm = document.querySelector("form");
const respostaNome = document.querySelector("span");
const respostaLista = document.querySelector("pre");

const pacientes = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inPaciente.value;
  pacientes.push(nome);
  let lista = "";
  for (let i = 0; i < pacientes; i++) {
    lista += `${i + 1}. ${pacientes[i]}\n`;
  }
  respostaLista.innerText = lista;
  frm.inPaciente.value = "";
  frm.inPaciente.focus();
});

frm.btUrgencia.addEventListener("ckick", () => {
  if (!frm.checkValidity()) {
    alert("Informe o nome do paciente a ser atendido em caráter de urgência");
    frm.inPaciente.focus();
    return;
  } else {
    const nome = frm.inPaciente.value;
    pacientes.unshift(nome);
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
    respostaLista.innerText = lista;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
  }

})
frm.btAtender.addEventListener("click", () => {
  if (pacientes.length == 0) {
    alert("Não há pacientes na fila de espera");
    frm.inPaciente.focus();
    return;
  }

  const atender = pacientes.shift();
  respostaNome.innerText = atender;
  let lista = "";
  pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`));
  respostaLista.innerText = lista

})



