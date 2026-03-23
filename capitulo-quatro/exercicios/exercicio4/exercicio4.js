const frm = document.querySelector("form");
const respostaTriangulo = document.querySelector("h3");
const respostaTipo = document.querySelector("h4");


frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const ladoA = Number(frm.inLadoA.value);
  const ladoB = Number(frm.inLadoB.value);
  const ladoC = Number(frm.inLadoC.value);
  
})
