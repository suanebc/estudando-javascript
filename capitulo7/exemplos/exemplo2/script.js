const frm = document.querySelector("form"); 
const resposta = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault() ;
  const senha = frm.inSenha.value;
  const erros = [];


  if (senha.length < 8 || senha.length > 15) {
    erros.push("entre 8 e 15 caracteres");
  }

  // verifica se não possui números
  if (senha.match(/[0-9]/g) == null) {
    erros.push(" números (no mínimo, 1)");
  }

 
  if (!senha.match(/[a-z]/g)) {
    erros.push("letras minúsculas (no mínimo, 1)");
  }


  if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
    erros.push("letras maiúsculas (no mínimo 2)");
  }


  if (!senha.match(/[\W|_]/g)) {
    erros.push("símbolos (no mínimo 1)");
  }

  // se vetor está vazio (significa que não foram encontrados erros)
  if (erros.length == 0) {
    resposta.innerText = "Ok! Senha Válida";
  } else {
    resposta.innerText = `Erro... A senha deve possuir ${erros.join(", ")}.]`;
  }
})
