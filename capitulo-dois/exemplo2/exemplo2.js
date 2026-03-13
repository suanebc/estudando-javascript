const frm = document.querySelector("form");
const resposta1 = document.querySelector("h3");
const resposta2 = document.querySelector("h4");

frm.addEventListener("submit", (e) =>{
  const titulo = frm.inTitulo.value
  const duracao = Number(frm.inDuracao.value)

  const horas = Math.floor(duracao / 60)
  const minutos =duracao % 60

  resposta1.innerText = titulo
  resposta2.innerText = `${horas} horas e ${minutos} minutos`

  e.preventDefault()
})