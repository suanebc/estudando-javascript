const frm = document.querySelector("form");
const respostaTriangulo = document.querySelector("h3");
const respostaTipo = document.querySelector("h4");


frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const ladoA = Number(frm.inLadoA.value);
  const ladoB = Number(frm.inLadoB.value);
  const ladoC = Number(frm.inLadoC.value);

  if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    respostaTriangulo.innerHTML = "Lados podem formar Triangulo";

    if (ladoA === ladoB && ladoA === ladoC) {
      respostaTipo.innerText = "Tipo : Triângulo Equilátero";

    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      respostaTipo.innerText = "Triângulo Isósceles  - dois lados iguais";

    } else {
      respostaTipo.innerText = "Triângulo Escaleno - todos os lados diferentes";
    }
  } else {
    respostaTriangulo.innerHTML = "Lados não forma um Triângulo";
  }


})
