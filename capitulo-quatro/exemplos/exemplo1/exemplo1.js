const frm = document.querySelector("form");
const respostaMedia = document.querySelector("h3");
const respostaResultado = document.querySelector("h4");


frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const nota1 = Number(frm.inNota1.value);
  const nota2 = Number(frm.inNota2.value);
  const media = (nota1 + nota2) / 2;

  if (media >= 7) {
    respostaMedia.innerText = `Parabéns ${nome}! Você foi aprovado(a)`;
    respostaMedia.style.color = "blue";

  } else if (media >= 4 ) {
    respostaMedia.innerText = `Atenção ${nome}. Você está em exame`;
    respostaMedia.style.color = "yellow";
  } else {
    respostaMedia.innerText = `Ops ${nome}... Você foi reprovado(a)`;
    respostaMedia.style.color = "red";

  }




})
